let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/${command}?APIKEY=MIMINETBOT`
  conn.sendFile(m.chat, res, 'nsfw.jpg', `tobat woi`, m, false)
}
handler.help = ['ass','panties','pussy','nsfwneko','mstrb','jahy','hentai','cuckold']
handler.tags = ['sange']

handler.command = /^(ass|panties|pussy|nsfwneko|hentai|mstrb|jahy|cuckold)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
// Original made by Taufik
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

