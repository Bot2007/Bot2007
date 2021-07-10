let handler = async (m, { conn }) => {
    conn.siapakahaku2 = conn.siapakahaku2 ? conn.siapakahaku2 : {}
    let id = m.chat
    if (!(id in conn.siapakahaku2)) throw false
    let json = conn.siapakahaku2[id][1]
    let ans = json.result.jawaban
    let clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^who2$/i

module.exports = handler