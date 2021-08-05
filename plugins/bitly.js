let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'Linknya mana'
  let res = await fetch(global.API('xteam', '/shorturl/bitly', { url: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result.link + '\n' + `Credit: Taufik`.trim())
  else throw 'Link invalid'
}
handler.help = ['bitly'].map(v => v + ' <url>')
handler.tags = ['shorturl']
handler.command = /^bitly$/i
// Made By Taufik
module.exports = handler
