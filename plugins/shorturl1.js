let fetch = require('node-fetch')
let handler = async (m, { text, command }) => {
  if (!text) throw 'Linknya mana'
  let res = await fetch(global.API('xteam', '/shorturl/' + command, { url: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result + '\n' + `Credit: Taufik`.trim())
  else throw 'Link invalid'
}
handler.help = ['tinyurl','shorturlat'].map(v => v + ' <url>')
handler.tags = ['shorturl']
handler.command = /^(tinyurl|shorturlat)$/i
module.exports = handler
