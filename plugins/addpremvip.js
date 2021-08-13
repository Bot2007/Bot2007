let handler = async (m, { conn, usedPrefix }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.prems.includes(m.mentionedJid[0].split`@`[0]) && m.isGroup) throw '${conn.getName(who)} sudah premium vip!'
    if (global.prems.includes(m.chat.split`@`[0]) && global.DATABASE.data.chats[m.chat].premium = 0 && m.isPrivate) throw '${conn.getName(who)} sudah premium vip!'
    if (global.prems.includes(m.chat.split`@`[0]) && global.DATABASE.data.chats[m.chat].premium > 0 && m.isPrivate) throw '${conn.getName(who)} melanggani premium berluput. Ketik ${usedPrefix}cekpremium untuk melihat kapan premium ${conn.getName(who)} luput.'
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
