let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [ nomor, kata ] = text.split` `
    if (!nomor && !kata || isNaN(nomor)) throw 'Masukkan Nomor dan kata. Contoh: ${usedPrefix + command} 601173093564 Hai Taufik hensem'
    m.reply(nomor + '@s.whatsapp.net', `Balasan dari ${m.chat.replace(/@.+/, '')} untuk anda. 
${kata}`.trim(), m)
    await m.reply('Mesej anda berjaya dihantar ke Nomor ${nomor}')
}
handler.help = ['balas'].map(v => v + ' [nomor] [teks]')
handler.tags = ['owner']
handler.command = /^(balas|reply)/i

handler.mods = true

handler.fail = null

module.exports = handler
