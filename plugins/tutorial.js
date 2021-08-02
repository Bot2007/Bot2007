let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *Tutorial Bot* 」
│ 
│〘 Tutorial EPIC RPG 〙
│• *${usedPrefix}claim*
│   Staterpack yang bisa di klaim 
│   12 jam sekali
│• *${usedPrefix}mulung*
│  *${usedPrefix}adventure*
│  *${usedPrefix}petualang*
│   Untuk mencari resource seperti 
│   Money, Exp dan dibutuhkan  
│   minimal 80 nyawa untuk bisa 
│   melakukannya dan, kamu tidak 
│   dapat spam karena ada delay 5 
│   menit
│• *${usedPrefix}use potion <jumlah>*
│   Untuk memakai potion/untuk 
│   mengisi nyawa/health
│• *${usedPrefix}shop buy potion <jumlah>*
│   Untuk membeli potion dan ketik 
│   *${usedPrefix}use potion <jumlah>*
│   untuk menggunakan potion
│• *${usedPrefix}shop <args>*
│   Untuk membeli atau menjual
│   sesuatu
│• *${usedPrefix}shop buy <crate> <jumlah>*
│   Untuk membeli Crate
│• *${usedPrefix}profile*
│   untuk mengetahui profilemu
│• *${usedPrefix}inv*
│  *${usedPrefix}inventory*
│   Untuk mengecek nyawa,
│   money dan lain-lain
│• *${usedPrefix}judi <jumlah>*
│   *_Jangan judi, Karena gk bakal_*
│  
│*@taufikmusa07*
╰─「 *Tutorial pake bot Taufik* 」
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.exp = 350
handler.fail = null

module.exports = handler

