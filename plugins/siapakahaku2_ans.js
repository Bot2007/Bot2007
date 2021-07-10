let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*who2/i.test(m.quoted.text)) return !0
    conn.siapakahaku2 = conn.siapakahaku2 ? conn.siapakahaku2 : {}
    if (!(id in conn.siapakahaku2)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == conn.siapakahaku2[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.siapakahaku2[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.result.jawaban.toLowerCase()) {
            global.DATABASE._data.users[m.sender].exp += conn.siapakahaku2[id][2]
            m.reply(`*Benar!*\n+${conn.siapakahaku2[id][2]} XP`)
            clearTimeout(conn.siapakahaku2[id][3])
            delete conn.siapakahaku2[id]
        } else if (m.text.toLowerCase().endsWith(json.result.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
