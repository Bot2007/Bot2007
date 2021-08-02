const uploadImage = require('../lib/uploadImage')


 let handler  = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
      let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Foto tidak ditemukan'
      } else 
    if (/video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Video tidak ditemukan'
      } try {
      urlfile = await uploadImage(img)
      m.reply(urlfile)
      } catch (e) {
      m.reply(`Conversion Failed`)
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
