let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'Linknya mana'
  let res = await fetch(global.API('xteam', '/shorturl/tinyurl', { url: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result + '\n' + `Credit: Taufik`.trim())
  else throw 'Link invalid'
}
handler.help = ['tinyurl'].map(v => v + ' <url>')
handler.tags = ['short']
handler.command = /^tinyurl$/i

module.exports = handler
