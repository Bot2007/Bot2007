const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = m => m

handler.before = async function (m) {
    let chat = global.DATABASE.data.chats[m.chat]
    if (chat.stiker && !chat.isBanned && !m.fromMe && !m.isBaileys) {
        try {
        let q = m
        let mime = (q.msg || q).mimetype || ''
        if (/webp/.test(mime)) return
        if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `balas gambar dengan caption *${usedPrefix + command}*`
        stiker = await sticker(img, false, global.packname, global.author)
        } else if (/video/.test(mime)) {
        if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
        let img = await q.download()
        if (!img) throw `balas video/gif dengan caption *${usedPrefix + command}*`
        stiker = await sticker(img, false, global.packname, global.author)
        } else if (m.text) {
            if (isUrl(m.text)) stiker = await sticker(false, m.text.split` `[0], global.packname, global.author)
            else return
        }
        } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
         }
    }
    return true
}
module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
