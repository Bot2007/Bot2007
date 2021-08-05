let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'Linknya mana'
  let res = await fetch(global.API('xteam', '/shorturl/bitly', { url: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result.link + '\n' + `Credit: Taufik`.trim())
  else throw 'Link invalid'
}
handler.help = ['bitly','tinyurl','shorturlat','customgg <nama yang mau dicustom>'].map(v => v + ' <url>')
handler.tags = ['shorturl']
handler.command = /^bitly$/i
// Made By Taufik
module.exports = handler

let handler2 = async (m, { text, command }) => {
  if (!text) throw 'Linknya mana'
  let res = await fetch(global.API('xteam', '/shorturl/${command}', { url: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result + '\n' + `Credit: Taufik`.trim())
  else throw 'Link invalid'
}
handler2.command = /^(tinyurl|shorturlat)$/i

module.exports = handler2

let fetch = require('node-fetch')
let handler = async (m, { text, command }) => {
  let [NAMA, TEKS] = text.split` `
  if (!text) throw 'Linknya mana\nContoh penggunaan:\n .customcuttly linkyoutube|https://youtube.com'
  if (!TEKS) throw 'Format salah\nContoh penggunaan:\n .customcuttly linkyoutube|https://youtube.com'
  let res = await fetch(global.API('xteam', '/shorturl/${command}', { url: TEKS, nama: NAMA }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result + '\n' + `Credit: Taufik`.trim())
  else throw 'Link invalid'
}
handler3.command = /^customcuttly$/i

module.exports = handler3
