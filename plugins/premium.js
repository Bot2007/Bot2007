let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│ > Bonus :
│• Diberikan Kode Gift Seminggu!
│
│ > Harga :
│• 20K / Bulan (4 Minggu)
│• 50K / Tahun (12 Bulan)
│• 100K / VIP (Permanen)
│
│ > Pembayaran :
│• https://saweria.co/taufikmusa07
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^(premium)$/i

module.exports = handler
