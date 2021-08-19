let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let url = await fetch('https://waifu.pics/api/nsfw/neko')
  let hentai = await url.json()
  let hasil = `Tobat bro`
 // conn.fakeReply(m.chat, '*_Sabar sedang mengirim hentai..._*','0@s.whatsapp.net','Orang sabar di sayang mantan:)')
conn.sendFile(m.chat, hentai.url, 'hentai.png', hasil, m)
}
handler.command = ['hentai2']
handler.register = true
handler.tags = ['sange']
handler.help = ['hentai2']
handler.limit = true

module.exports = handler
