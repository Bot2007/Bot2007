let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, args }) => {
  if (!args[0]) throw `
Tidak ada url
Contoh penggunaan: 
${usedPrefix}bitly https://youtube.com

Credit: @${global.conn.user.jid.replace(/@.+/, '')}`.trim()
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let res = await fetch(global.API('xteam', '/game/tebakgambar', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw 'Maap, Limit Apikey Taufik abis.\nSilahkan tunggu keesokannya ya.\nSementara mau nunggu, main aja versi free apikey dengan mengetik ${usedPrefix}tebakgambar2'
    if (!json.result) throw 'Link Invalid'
    let hasil = `
nih urlnya, *${json.result.id}*
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
