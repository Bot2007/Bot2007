let fetch = require('node-fetch')
let handler = async (m, { text, command }) => {
  if (!text) throw 'Linknya mana'
  let res = await fetch(global.API('xteam', '/shorturl/' + command, { url: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result.shorturl + '\n' + `Credit: Taufik`.trim())
  else throw 'Link invalid'
}
handler.help = ['sid', 'cuttly'].map(v => v + ' <url>')
handler.tags = ['shorturl']
handler.command = /^(sid|cuttly)$/i
// Made By Taufik
module.exports = handler
