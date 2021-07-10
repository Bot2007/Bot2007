let handler = async (m, { text, usedPrefix }) => m.reply(`
╭─「 Topup Limit 」
│ • Mahu topup/beli limit? Whatsapp ke nomer ini wa.me/601173093564
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['topuplimit']
handler.tags = ['topup']
handler.command = /^(topuplimit)$/i

module.exports = handler
