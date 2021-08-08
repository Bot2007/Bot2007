let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik2 = conn.tebaklirik2 ? conn.tebaklirik2 : {}
    let id = m.chat
    if (id in conn.tebaklirik2) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik2[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync(`./src/tebaklirik.json`))
    let json = tebaklirik[Math.floor(Math.random() * res.length)]
    conn.tebaklirik2[id] = [
        await conn.reply(m.chat, `${json.soal}
Timeout: *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}teli2* untuk hint
Bonus: ${poin} XP`.trim(), m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklirik2[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, tebaklirik2[id][0])
            delete conn.tebaklirik2[id]
        }, timeout)
    ]
}
handler.help = ['tebaklirik2 (Without Apikey)']
handler.tags = ['game']
handler.command = ['tebaklirik2']

module.exports = handler
