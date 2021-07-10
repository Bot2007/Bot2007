let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar2 = conn.tebakgambar2 ? conn.tebakgambar2 : {}
    let id = m.chat
    if (id in conn.tebakgambar2) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar2[id][0])
        throw false
    }
    let res = await fetch(global.API('bg', '/tebakgambar'))
    let json = await res.json()
    if (json.status !== true) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint2 untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.tebakgambar2[id] = [
      await conn.sendFile(m.chat, json.result.img, 'tebakgambar.jpg', caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakgambar2[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.tebakgambar2[id][0])
        delete conn.tebakgambar2[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakgambar2 (Tanpa Apikey)']
  handler.tags = ['game']
  handler.command = ['tebakgambar2']
  
  module.exports = handler
