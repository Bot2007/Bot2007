const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = m => m

handler.before = async function (m) {
    let chat = global.DATABASE.data.chats[m.chat]
    if (chat.stiker && !chat.isBanned) {
        let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Foto/Video tidak ditemukan'
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })}
    }
}
module.exports = handler
