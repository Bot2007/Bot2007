let handler = async (m, { usedPrefix, text }) => {
if (!text) throw `Tidak Ada Url
Contoh penggunaan: ${usedPrefix}bitly https://youtube.com
Credit: @${global.conn.user.jid.replace(/@.+/, '')}`.trim()
linknye = await bitly(text)

m.reply(m.chat, `nih linknya, ${linknye} 
Credit: @${global.conn.user.jid.replace(/@.+/, '')}`.trim(), m, { contextInfo: { mentionedJid: global.conn.user.jid } })})
}
handler.help = ['bitly <url>']
handler.tags = ['internet']
handler.command = ['bitly']

module.exports = handler

async function bitly(urls) {
fet = require('axios')
heh = await fet.get(`https://tobz-api.herokuapp.com/api/bitly?url=${urls}&apikey=LRBOuIZYf9ozZmu1wAkf`)

return heh.data.result
}
