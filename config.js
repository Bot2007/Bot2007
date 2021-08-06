global.owner = ['601173093564'] // Put your number here
global.mods = ['601173093564'] // Want some help?
global.prems = ['601173093564'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  lol: 'https://lolhuman.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://lolhuman.herokuapp.com': '3780192c4cdc5e3ec5d5900b',
  'https://api.xteam.xyz': '7fa6089e6a81b5bc',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',

}

// Sticker WM
global.packname = 'Sticker Buatan'
global.author = 'Taufik'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
