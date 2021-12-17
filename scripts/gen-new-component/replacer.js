const fs = require('fs-extra')
const handlebars = require('handlebars')
const { resolve } = require('path')
const { capitalize, kebabCase } = require('../utils')

const getTplFilePath = (meta) => ({
  // docs 目录
  readme: {
    from: './.template/docs/README.md.tpl',
    to: `../../src/${meta.name}/docs/README.md`,
  },
  demo: {
    from: './.template/docs/demo.vue.tpl',
    to: `../../src/${meta.name}/docs/demo.vue`,
  },
  // src 目录
  vue: {
    from: './.template/src/index.vue.tpl',
    to: `../../src/${meta.name}/src/index.vue`,
  },
  // 根目录
  install: {
    from: './.template/index.ts.tpl',
    to: `../../src/${meta.name}/index.ts`,
  },
})

const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta)
  Object.keys(filePaths).forEach((key) => {
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8')
    const _meta = { ...meta }
    _meta.className = kebabCase('dm-' + meta.name)
    if (key === 'install' || key === 'vue') {
      _meta.name = capitalize(meta.name)
    }
    const fileContent = handlebars.compile(fileTpl)(_meta)
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, (err) => {
      if (err) console.log(err)
    })
  })
}

// 读取 src/list.json 并更新
const listJsonTplReplacer = (meta) => {
  const listFilePath = '../../src/list.json'
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8')
  const listFileContent = JSON.parse(listFileTpl)
  listFileContent.push(meta)
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, (err) => {
    if (err) console.log(err)
  })
  return listFileContent
}

// 更新 install.ts
const installTsTplReplacer = (listFileContent) => {
  const installFileFrom = './.template/components.ts.tpl'
  const installFileTo = '../../src/components.ts' // 这里没有写错，别慌
  const installFileTpl = fs.readFileSync(resolve(__dirname, installFileFrom), 'utf-8')
  const installMeta = {
    exportPlugins: listFileContent.map(({ name }) => `export * from './${name}'`).join('\n'),
  }
  const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })(installMeta)
  fs.outputFile(resolve(__dirname, installFileTo), installFileContent, (err) => {
    if (err) console.log(err)
  })
}

module.exports = (meta) => {
  compFilesTplReplacer(meta)
  const listFileContent = listJsonTplReplacer(meta)
  installTsTplReplacer(listFileContent)

  console.log(`组件新建完毕，请前往 src/${meta.name} 目录进行开发`)
}
