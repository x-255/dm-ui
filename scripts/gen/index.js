const ask = require('./ask')
const replacer = require('./replacer')

async function run() {
  const meta = await ask()
  replacer(meta)
}

run()
