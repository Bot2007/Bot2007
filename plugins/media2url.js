const uploadImage = require('../lib/uploadImage')


 let handler  = async (m, { conn }) => {
      if (!m.quoted) throw 'Balas foto/video nya'
      let img = await m.quoted.download()
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
