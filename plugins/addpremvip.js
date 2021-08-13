let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.prems.includes(who.split`@`[0]) &&) throw 'Dia sudah premium vip!'
    if (global.prems.includes(who.split`@`[0])) throw 'Dia sudah premium vip!'
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
