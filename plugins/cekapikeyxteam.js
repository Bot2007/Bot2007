let fetch = require('node-fetch')

let handler = async (m, { text }) => {
  if (!text) throw 'Apikey lu mana'
  let res = await fetch('https://api.xteam.xyz/cekey?APIKEY=${text}')
  let json = await res.json()
  if (json.status) m.reply(`
  IP = ${json.response.ip}
  Nama pendaftar apikey = ${json.response.name}
  Email pendaftar apikey = ${json.response.email}
  Total hit = ${json.response.totalhit}
  Premium = ${json.response.premium == false ? "Tidak" : "Ya"}
  
  ${json.response.expired}`.trim())
  else throw 'Apikey invalid'
}
handler.help = ['cekapikeyxteam'].map(v => v + ' <apikey>')
handler.tags = ['tool']
handler.command = /^cekapikeyxteam$/i
// Made By Taufik
module.exports = handler
