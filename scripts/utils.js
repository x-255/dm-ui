const words = (middleStr) => middleStr.match(/[A-Z]?[a-z]+|[A-Z]+/g) ?? []

const trim = (middleStr) => middleStr.replace(/^[^a-z]+|[^a-z]+$/gi, '')

const lowerFirst = (middleStr) =>
  middleStr[0].toLowerCase() + middleStr.slice(1)

const upperFirst = (middleStr) =>
  middleStr[0].toUpperCase() + middleStr.slice(1)

/** 首字母大写其他小写 */
const capitalize = (middleStr) =>
  middleStr[0].toUpperCase() + middleStr.slice(1).toLowerCase()

/** 转小驼峰 */
const camelCase = (middleStr) =>
  lowerFirst(words(middleStr).reduce((res, str) => res + capitalize(str), ''))

/** 转短横线 */
const kebabCase = (middleStr) =>
  trim(words(middleStr).reduce((res, str) => `${res}-${str.toLowerCase()}`, ''))

const pick = (target, props) =>
  props.reduce(
    (res, cur) => (cur in target && (res[cur] = target[cur]), res),
    {},
  )

exports.words = words
exports.trim = trim
exports.lowerFirst = lowerFirst
exports.upperFirst = upperFirst
exports.capitalize = capitalize
exports.camelCase = camelCase
exports.kebabCase = kebabCase
exports.pick = pick
