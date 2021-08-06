let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, isPrems}) => {
    const prem = 5000
    const free = 500
    let user = global.DATABASE._data.users[m.sender]
    let __timers = (new Date - user.lastdaily)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastdaily > 86400000) {
        conn.reply(m.chat, `+${isPrems ? prem : free} XP`, m)
        global.DATABASE._data.users[m.sender].exp += isPrems ? prem : free
        global.DATABASE._data.users[m.sender].lastdaily = new Date * 1
    } else {
        conn.send3Button(m.chat, `silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`.trim(), 'Pilih yang mana', 'CLAIM', '.claim', 'WEEKLY', '.weekly', 'MONTHLY', '.monthly')
    }
}
handler.help = ['daily']
handler.tags = ['rpg']
handler.command = /^(daily)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

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
