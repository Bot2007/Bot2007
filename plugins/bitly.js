let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, args }) => {
  if (!args[0]) throw `
Tidak ada url
Contoh penggunaan: 
${usedPrefix}bitly https://youtube.com

Credit: @${global.conn.user.jid.replace(/@.+/, '')}`.trim()
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let f = await fetch(global.api('https://tobz-api.herokuapp.com', '/api/bitly?url=${url}', '&apikey=LRBOuIZYf9ozZmu1wAkf'))
  let res = await f.json()
  let hasil = `
nih urlnya, *${res.result}*

Credit: @${global.conn.user.jid.replace(/@.+/, '')}`.trim()
  m.reply(m.chat, hasil, m, { contextInfo: { mentionedJid: global.conn.user.jid } })
} 
handler.help = ['bitly'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = ['bitly']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
