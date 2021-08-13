let handler  = async (m, { conn, text, usedPrefix, command }) => {
  let [txt, text2] = text.split`|`
  if (!txt) throw 'Masukan Judul dan Deskripsi nya'
  if (!text2) throw `Contoh : ${usedPrefix + command} SLAYER?|INI BUKAN SELAYER BANG:>`
  let q = m.quoted ? m.quoted : m 
  let mime = (q.msg || q).mimetype || ''
  try {
  if (/image|webp/.test(mime)) {
    let img = await q.download()
    if (!img) throw 'Foto/Sticker tidak ditemukan'
    let pi = conn.prepareMessageFromContent(m.chat, {
	"productMessage": { 
          "product": { 
            "productImage":{ 
	      "mimetype": "image/jpeg", 
	      "jpegThumbnail": img 
            }, 
	    "title": `${txt}`, 
	    "description": `${text2}`, 
	    "currencyCode": "MYR", 
            "priceAmount": "999999999999", 
	    "retailerId": "Katalog buatlo", 
	    "productImageCount": 1 
	  }, 
	  "businessOwnerJid": conn.user.jid
	}
      }, { quoted: m })
    conn.relayWAMessage(pi, m)
    m.reply('Nih katalog ya om', null, { quoted: pi })
  } else m.reply('FOTO ATAU STICKERNYA MANA OM?')
  }  catch (e) {
    m.reply('*Hanya foto ama sticker aja bisa dijadikan katalog.*')
  }
}

handler.help = ['sticker','image'].map(v => v + '2katalog')
handler.tags = ['tools']
handler.command = /^(sticker|image)(2katalog)$/i
handler.owner = true
handler.fail = null
handler.exp = 2

module.exports = handler
