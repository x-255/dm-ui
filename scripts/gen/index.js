const ask = require('./ask')
const replacer = require('./replacer')

async function gen() {
  const meta = await ask()
  replacer(meta)
}

gen()
