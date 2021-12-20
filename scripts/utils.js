const words = (middleStr) => middleStr.match(/[A-Z]?[a-z]+|[A-Z]+/g) ?? []

const trim = (middleStr) => middleStr.replace(/^[^a-z]+|[^a-z]+$/gi, '')

const lowerFirst = (middleStr) =>
  middleStr[0].toLowerCase() + middleStr.slice(1)

const capitalize = (middleStr) =>
  middleStr[0].toUpperCase() + middleStr.slice(1).toLowerCase()

const camelCase = (middleStr) =>
  lowerFirst(words(middleStr).reduce((res, str) => res + capitalize(str), ''))

const kebabCase = (middleStr) =>
  trim(words(middleStr).reduce((res, str) => `${res}-${str.toLowerCase()}`, ''))

exports.words = words
exports.trim = trim
exports.lowerFirst = lowerFirst
exports.capitalize = capitalize
exports.camelCase = camelCase
exports.kebabCase = kebabCase
