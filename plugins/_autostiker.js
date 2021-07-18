const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn }) => {
    let chat = global.DATABASE.data.chats[m.chat]
    if (chat.stiker && !chat.isBanned) {
        // try {
    let sticker = false  
    let q = m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw false
      stikero = await sticker(img, false, global.packname, global.author)
      await conn.sendMessage(m.chat, stikero, MessageType.sticker, { quoted: m })
    } if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
      let img = await q.download()
      if (!img) throw false
      stiker = await sticker(img, false, global.packname, global.author)
      await conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
        }
        // } finally {
        //     if (stiker) {
        //     }
        // }
    }
    return true
}
module.exports = handler
