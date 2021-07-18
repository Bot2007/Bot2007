const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = m => m

handler.before = async function (m) {
    let chat = global.DATABASE.data.chats[m.chat]
    if (chat.stiker && !chat.isBanned) {
        // try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas gambar dengan caption *${usedPrefix + command}*`
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
      let img = await q.download()
      if (!img) throw `balas video/gif dengan caption *${usedPrefix + command}*`
      stiker = await sticker(img, false, global.packname, global.author)
     await this.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
        }
        // } finally {
        //     if (stiker) {
        //     }
        // }
    }
    return true
}
module.exports = handler
