let handler = async (m, { conn, usedPrefix }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.chat
    if (!who) throw 'Siapa yang mau dijadikan premium?'
    if (global.prems.includes(who.split`@`[0]) && global.DATABASE.data.chats[m.chat].premium == 0) return m.reply(`${conn.getName(who)} sudah premium vip!`.trim())
    if (global.prems.includes(who.split`@`[0]) && global.DATABASE.data.chats[m.chat].premium >= 0) return m.reply(`${conn.getName(who)} melanggani premium berkadarluasa. Ketik ${usedPrefix}cekpremium untuk melihat kapan premium kadarluasa ${conn.getName(who)} tamat.`.trim())
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `Hai, @${who.split`@`[0]}. Kamu sudah premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addprem','addpremium', 'addprems'].map(v => v + 'vip')
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)(prem|prems|premium)vip$/i
handler.rowner = true
module.exports = handler
