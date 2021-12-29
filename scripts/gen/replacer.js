const fs = require('fs-extra')
const handlebars = require('handlebars')
const { resolve } = require('path')
const { execSync } = require('child_process')
const { pick } = require('../utils')

const getTplFilePath = ({ dirname }) => ({
  // docs 目录
  readme: {
    from: './.template/docs/README.md.tpl',
    to: `../../src/${dirname}/docs/README.md`,
  },
  demo: {
    from: './.template/docs/docs-demo.vue.tpl',
    to: `../../src/${dirname}/docs/docs-demo.vue`,
  },
  // src 目录
  vue: {
    from: './.template/src/index.vue.tpl',
    to: `../../src/${dirname}/src/index.vue`,
  },
  // 根目录
  install: {
    from: './.template/index.ts.tpl',
    to: `../../src/${dirname}/index.ts`,
  },
  // 测试 目录
  test: {
    from: './.template/tests/index.spec.ts.tpl',
    to: `../../src/${dirname}/tests/${dirname}.spec.ts`,
  },
})

const compFilesTplReplacer = async (meta) => {
  const filePaths = getTplFilePath(meta)
  const replacers = Object.keys(filePaths).map(async (key) => {
    const fileTpl = fs.readFileSync(
      resolve(__dirname, filePaths[key].from),
      'utf-8',
    )
    const fileContent = handlebars.compile(fileTpl)(meta)
    await fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent)
  })
  await Promise.all(replacers)
}

// 更新 src/list.json
const listJsonTplReplacer = async (meta) => {
  const listFilePath = '../../src/list.json'
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8')
  const listFileContent = JSON.parse(listFileTpl)

  if (listFileContent.find((val) => val.name === meta.name)) {
    throw Error(`${meta.name}组件已存在！`)
  }

  listFileContent.push(pick(meta, ['name', 'dirname', 'zhName', 'desc']))
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  await fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile)
  return listFileContent
}

// 更新 src/components.ts
const installTsTplReplacer = async (listFileContent) => {
  const from = './.template/components.ts.tpl'
  const to = '../../src/components.ts'
  const tpl = fs.readFileSync(resolve(__dirname, from), 'utf-8')
  const installMeta = {
    exportPlugins: listFileContent
      .map(({ dirname }) => `export * from './${dirname}'`)
      .join('\n'),
  }
  const installFileContent = handlebars.compile(tpl, {
    noEscape: true,
  })(installMeta)

  await fs.outputFile(resolve(__dirname, to), installFileContent)
}

// 使新建组件涉及到的文件的符合eslint规则
const fixFiles = (name) => {
  execSync(
    `eslint src/${name} src/components.ts --ext .vue,.js,.ts,.jsx,.tsx --fix`,
  )
}

module.exports = async (meta) => {
  await compFilesTplReplacer(meta)
  const listFileContent = await listJsonTplReplacer(meta)
  await installTsTplReplacer(listFileContent)
  fixFiles(meta.dirname)
  // eslint-disable-next-line no-console
  console.log(`组件新建完毕，请前往 src/${meta.dirname} 目录进行开发`)
}
