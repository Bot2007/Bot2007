let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku2 = conn.siapakahaku2 ? conn.siapakahaku2 : {}
    let id = m.chat
    if (id in conn.siapakahaku2) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.siapakahaku2[id][0])
        throw false
    }
    let res = await fetch(global.API('bg', '/siapakahaku', {}))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (json.status !== true) throw json
    let caption = `
${json.result.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}who2 untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.siapakahaku2[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku2[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.siapakahaku2[id][0])
            delete conn.siapakahaku2[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku2 (Tanpa Apikey)']
handler.tags = ['game']
handler.command = ['siapakahaku2']

module.exports = handler
