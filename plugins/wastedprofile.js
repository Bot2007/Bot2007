const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let tangkap = global.API('https://some-random-api.ml', '/canvas/wasted', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  })
  let stiker = await sticker(null, tangkap, global.packname, global.author)
 if (stiker) return conn.sendMessage(m.chat, stiker, m, { asSticker: true })
  throw stiker.toString()
}


handler.help = ['wastedprofile']
handler.tags = ['maker']

handler.command = /^(wastedprofile)$/i

module.exports = handler
