let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let [TEKS, NAMA] = text.split`|`
  if (!text) throw 'Linknya mana\nContoh penggunaan:\n .customcuttly https://youtube.com|linkyoutube'
  if (!NAMA) throw 'Format salah\nContoh penggunaan:\n .customcuttly https://youtube.com|linkyoutube'
  let res = await fetch(global.API('xteam', '/shorturl/customcuttly', { url: TEKS, nama: NAMA }, 'APIKEY'))
  let json = await res.json()
  if (!json.result.shortLink) return m.reply(json.result)
  if (json.status) m.reply(json.result.shortLink + '\n' + `Credit: Taufik`.trim())
}
handler.help = ['customcuttly'].map(v => v + ' <url>|<nama yang mau dicustom>')
handler.tags = ['shorturl']
handler.command = /^customcuttly$/i

module.exports = handler
