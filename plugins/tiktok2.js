const { tiktok } = require('../lib/scrape')
let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`
  if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`

  // tiktok(args[0]).then(async res => {
  //   let tiktok = JSON.stringify(res)
  //   let json = JSON.parse(tiktok)
  //   // m.reply(require('util').format(json))
  //   await conn.sendVideo(m.chat, json.nowm, '*© stikerin*', m, { thumbnail: await (await fetch(json.nowm)).buffer() })
  // })

  let res = await fetch(global.API('hardianto', '/api/download/tiktok', { url: args[0] }, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  await conn.sendVideo(m.chat, json.wm, '@taufikmusa07', m, { thumbnail: Buffer.alloc(0) })

}
handler.help = ['tiktok2'].map(v => v + ' <url> (without detail)')
handler.tags = ['downloader']
handler.command = ['tiktok2']

handler.limit = true

module.exports = handler
