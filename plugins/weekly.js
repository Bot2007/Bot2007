let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.DATABASE._data.users[m.sender]
    let _timers = (604800000 - (new Date - user.lastweekly))
    let timers = clockString(_timers) 
    if (new Date - user.lastweekly > 604800000) {
        conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 20000 💵money dan 3 🎁Legendary crate`, m)
        user.money += 20000
        user.legendary += 3
        user.lastweekly= new Date * 1
    } else {
        conn.send3Button(m.chat, `silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`.trim(), 'Pilih yang mana', 'DAILY', '.daily', 'CLAIM', '.claim', 'MONTHLY', '.monthly')
    }
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
