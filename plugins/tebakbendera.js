let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/tebakbendera', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw 'Maap, Limit Apikey Taufik abis.\nSilahkan tunggu keesokannya ya.'
    conn.tebakbendera[id] = [
        await conn.reply(m.chat, `Bendera: *${json.bendera}*
Timeout: *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tbhint* untuk hint
Bonus: ${poin} XP`.trim(), m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = ['tebakbendera']

module.exports = handler
