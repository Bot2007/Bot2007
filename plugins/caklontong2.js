let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler  = async (m, { conn, usedPrefix }) => {
    conn.caklontong2 = conn.caklontong2 ? conn.caklontong2 : {}
    let id = m.chat
    if (id in conn.caklontong2) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.caklontong2[id][0])
        throw false
    }
    let res = await fetch(global.API('bg',  '/caklontong'))
    let json = await res.json()
    if (json.status !== true) return m.reply(json)
    conn.caklontong2[id] = [
      await conn.reply(m.chat, `Soal: *${json.result.soal}*\nTimeout: *${(timeout / 1000).toFixed(2)} detik*\nKetik ${usedPrefix}calo2 untuk hint\nBonus: ${poin} XP`, m),
      json, poin,
      setTimeout(() => {
        if (conn.caklontong2[id]) conn.reply(m.chat, `Waktu habis!\n*${json.result.jawaban}${json.result.deskripsi ? ' (' + json.result.deskripsi + ')' : ''}*`, conn.caklontong2[id][0])
        delete conn.caklontong2[id]
      }, timeout)
    ]
  }
  handler.help = ['caklontong2 (Tanpa apikey)']
  handler.tags = ['game']
  handler.command = ['caklontong2']
  
  module.exports = handler
