let axios = require('axios')
let handler = async (m, { usedPrefix, args }) => {
  if (!args[0]) throw `
Tidak ada url
Contoh penggunaan: 
${usedPrefix}bitly https://youtube.com

Credit: @${global.conn.user.jid.replace(/@.+/, '')}`.trim()
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  axios.get(`https://tobz-api.herokuapp.com/api/bitly?url=${url}&apikey=LRBOuIZYf9ozZmu1wAkf`).then ((res) => {
  let hasil = `
nih urlnya, *${res.data.result}*
Noted: jika nggak bisa masuk ke urlnya, mungkin errorya ;)

Credit: @${global.conn.user.jid.replace(/@.+/, '')}`.trim()
  m.reply(m.chat, hasil, m, { contextInfo: { mentionedJid: global.conn.user.jid } })})
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
