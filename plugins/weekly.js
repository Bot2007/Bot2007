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
        let buttons = button(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
    }
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.fail = null

module.exports = handler

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
