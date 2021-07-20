let axios = require('axios')
let handler = async (m, { conn, command, usedPrefix, args }) => {
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url. Contoh penggunaan: ${usedPrefix + command} https://youtube.com', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  axios.get(`https://tinyurl.com/api-create.php?url=${url}`).then ((res) => {
  let hasil = `nih URL anda ${res.data}`.trim()
  m.reply(hasil)})
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
