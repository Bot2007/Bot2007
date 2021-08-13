let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m 
  let mime = (q.msg || q).mimetype || ''
  try { 
  if (/image|webp/.test(mime)) {
    let img = await q.download()
    if (!img) throw 'Foto/Sticker tidak ditemukan'
    conn.sendMessage(m.chat, {degreesLatitude: 25.21465, degreesLongitude: 49.33476, jpegThumbnail: img, Image: img, caption: "DZX NGEBUG:V"}, MessageType.location)
  } else m.reply('Tag foto/stickernya!!')
  }  catch (e) {
    m.reply('*Hanya foto ama sticker aja bisa dijadikan lokasi.*')
  }
}

handler.help = ['jadilokasi']
handler.tags = ['tools']
handler.command = /^(jadilokasi)$/i

module.exports = handler
