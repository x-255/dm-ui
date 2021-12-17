const inquirer = require('inquirer')
const { camelCase, kebabCase } = require('../utils.js')

module.exports = async () => {
  const meta = await inquirer.prompt([
    {
      type: 'input',
      message: '请输入你要新建的组件名：',
      name: 'name',
    },
    {
      type: 'input',
      message: '请输入你要新建的组件中文名：',
      name: 'zhName',
    },
    {
      type: 'input',
      message: '请输入组件的功能描述：',
      name: 'desc',
      default(m) {
        return `这是一个${m.zhName}组件`
      },
    },
  ])

  let { name } = meta
  meta.name = name = camelCase(name)

  return meta
}
