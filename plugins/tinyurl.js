let axios = require('axios')
let handler = async (m, { usedPrefix, args }) => {
  if (!args[0]) throw `
Tidak ada url
Contoh penggunaan: 
${usedPrefix}tinyurl https://youtube.com

Credit: @${global.conn.user.jid.replace(/@.+/, '')}`.trim()
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  axios.get(`https://tinyurl.com/api-create.php?url=${url}`).then ((res) => {
  let hasil = `
nih urlnya, *${res.data}*
Noted: jika nggak bisa masuk ke urlnya, mungkin errorya ;)

Credit: @${global.conn.user.jid.replace(/@.+/, '')}`.trim()
  m.reply(m.chat, hasil, m, { contextInfo: { mentionedJid: global.conn.user.jid } })})
}
handler.help = ['tinyurl'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = ['tinyurl']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
