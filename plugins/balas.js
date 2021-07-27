let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [ nomor, kata ] = text.split` `
    if (!nomor && !kata || isNaN(nomor)) throw 'Masukkan Nomor dan kata. Contoh: ${usedPrefix + command} 601173093564 Hai Taufik hensem'
    m.reply(nomor + '@s.whatsapp.net', 'Balasan dari ${kata}', m)
    await m.reply('Mesej anda berjaya dihantar')
}
handler.help = ['balas'].map(v => v + ' [nomor] [teks]')
handler.tags = ['owner']
handler.command = /^(balas|reply)/i

handler.mods = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
