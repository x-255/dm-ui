const infoCollector = require('./infoCollector')
const replacer = require('./replacer')

async function run() {
  const meta = await infoCollector()
  replacer(meta)
}

run()
