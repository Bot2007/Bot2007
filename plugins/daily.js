let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    const prems = 5000
    const free = 500
    let user = global.DATABASE._data.users[m.sender]
    let __timers = (new Date - user.lastdaily)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastdaily > 86400000) {
        conn.reply(m.chat, `+{isPrems ? prem : free} XP`, m)
        global.DATABASE._data.users[m.sender].exp += isPrems ? prem : free
        global.DATABASE._data.users[m.sender].lastdaily = new Date * 1
    } else {
        let buttons = button(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
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

function button(teks, user) {
    const buttons = []
    
    let claim = new Date - user.lastclaim > 86400000
    let daily = new Date - user.lastdaily > 86400000
    let monthly = new Date - user.lastmonthly > 2592000000
    let weekly = new Date - user.lastweekly > 604800000
    console.log({claim, , daily, monthly, weekly})
    
    if (monthly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: 'MONTLY'}, type: 1})
    if (weekly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: 'WEEKLY'}, type: 1})
    if (claim) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: 'CLAIM'}, type: 1})
    if (daily) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: 'DAILY'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
        contentText: teks,
        footerText: '@taufikmusa07',
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}
