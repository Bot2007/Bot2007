let handler = async (m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return m.reply('Silahkan masukan nomor yang akan dispam')
    if (!pesan) return m.reply('Silahkan masukan pesannya')
    if (text > 500) return m.reply('Teks Kepanjangan!')
    var nomor = m.sender
    let spam = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\nTaufik`.trim()
    let logs = `[!] Berhasil mengirim spam wa ke nomor ${number} 10 kali
 Dengan mesej
 ${spam}`
    m.reply(logs.trim())
    m.reply('${number}@s.whatsapp.net', spam, m)
}
handler.help = ['spam <nomor|pesan>', 'spamwa <nomor|pesan>']
handler.tags = ['spammer']
handler.command = /^(spam|spamwa)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
