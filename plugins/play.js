let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'Cari apa?'
  let chat = global.DATABASE._data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await (isVideo ? ytv : yta)(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'Semua server tidak bisa :/'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  m.reply(`Filesize: ${filesizeF}
Server y2mate: ${usedServer}

Sebentar ya, ${isVideo ? "video" : "audio"}mu sedang di hantar`.trim(), null, { contextInfo: { forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `status@broadcast` }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await (await require('node-fetch')(thumb)).buffer()}, "title": title, "description": filesizeF, "currencyCode": "MYR", "priceAmount1000": "1", "retailerId": "TaufikBot", "productImageCount": 1}, "businessOwnerJid": `601173093564@s.whatsapp.net`}}}})
let _thumb = {}
try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
catch (e) { }
let _fakeurl = { contextInfo: { "externalAdReply": {
                  "title": title,
                  "body": "Filesize: " + filesizeF,
                  "mediaType": "VIDEO",
                  "thumbnailUrl": thumb,
                  "thumbnail": "",
                  "sourceUrl": vid.url
                } } }
try { if (isVideo) _fakeurl = {} }
catch (e) { }
if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*Title:* ${title}
*Server y2mate:* ${usedServer}
`.trim(), m, false,  {
  ..._thumb,
  asDocument: chat.useDocument,
  ..._fakeurl
})
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true

module.exports = handler

