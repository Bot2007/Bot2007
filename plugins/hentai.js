let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let url = await fetch('https://waifu.pics/api/nsfw/neko')
  let hentai = await url.json()
  let hasil = `Link ${hentai.url}`
 // conn.fakeReply(m.chat, '*_Sabar sedang mengirim hentai..._*','0@s.whatsapp.net','Orang sabar di sayang mantan:)')
conn.sendFile(m.chat, ardiganz.url, 'hentai.png', hasil, m, false, { thumbnail: require('fs').readFileSync('src/TaufikBot.png') } )
}
handler.command = /^hentai$/i
handler.register = true
handler.tags = ['sange']
handler.help = ['hentai']
handler.limit = true

module.exports = handler