let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[❗] WAIT, Sedang Proses...*')
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/textmaker/honey?q=${response}&apikey=dappakntlll`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'honey.jpg', `Nih Kak`, m, false)
}
handler.help = ['honey'].map(v => v + ' <teks>')
handler.tags = ['creator']
handler.command = /^(honey)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler


