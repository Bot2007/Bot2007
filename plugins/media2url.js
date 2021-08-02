const uploadImage = require('../lib/uploadImage')


 let handler  = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
      let img = await q.msg.download()
      if (!img) throw 'balas foto/video dengan caption *${usedPrefix + command}*'
      try {
      urlfile = await uploadImage(img)
      m.reply(urlfile)
      } catch (e) {
      m.reply(`Hanya foto/video aja yang bisa dijadikan url`)
     }
}
handler.help = ['img2url','video2url']
handler.tags = ['tools']
handler.command = /^((img|video)2url)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
