//
let fs = require('fs')
let delay = require('delay')
let handler = async (m, { conn, text }) => {
let total = Math.floor(Math.random() * 99999);
let json = { exp: total }
conn.mining = conn.mining ? conn.mining : {}
 if (conn.mining[m.chat]) throw '*Jangan Spam, Coldown 1 menit!!!!*'
  conn.reply(m.chat, `Selamat Anda Mendapatkan\n*+${json.exp}* XP`, m)
  conn.mining[m.chat] = true 
   global.DATABASE._data.users[m.sender].exp += json.exp * 1
   setTimeout(() => { 
   delete conn.mining[m.chat]
  }, 60 * 1000)
}
handler.help = ['kerja', 'nguli', 'work'].map(v => v + ' [premium] (Limit)')
handler.tags = ['xp']
handler.command = /^(kerja|nguli|work)/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
