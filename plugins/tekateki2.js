let fs = require('fs')
let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki2 = conn.tekateki2 ? conn.tekateki2 : {}
    let id = m.chat
    if (id in conn.tekateki2) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki2[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync(`./src/tekateki.json`))
    let json = res[Math.floor(Math.random() * res.length)]
    conn.tekateki2[id] = [
        await conn.reply(m.chat, `${json.pertanyaan}
Timeout: *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tete2* untuk hint
Bonus: ${poin} XP`.trim(), m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki2[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tekateki2[id][0])
            delete conn.tekateki2[id]
        }, timeout)
    ]
}
handler.help = ['tekateki2 (Tanpa Apikey)']
handler.tags = ['game']
handler.command = ['tekateki2']

module.exports = handler
