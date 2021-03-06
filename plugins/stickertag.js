const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, args, usedPrefix, command, participants }) => {
  let stiker = false
  let users = participants.map(u => u.jid)
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas sticker dengan caption *${usedPrefix + command}*`
      stiker = await sticker(img, false, global.packname, global.author)
    } 
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      contextInfo: { mentionedJid: users }, quoted: m
    })
    else throw 'Conversion Failed'
  }
}
handler.help = ['stikertag', 'stag', 'stickertag']
handler.tags = ['sticker']
handler.command = ['stikertag', 'stag', 'stickertag']

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
