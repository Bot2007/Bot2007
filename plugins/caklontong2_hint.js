let handler = async (m, { conn }) => {
    conn.caklontong2 = conn.caklontong2 ? conn.caklontong2 : {}
    let id = m.chat
    if (!(id in conn.caklontong2)) throw false
    let json = conn.caklontong2[id][1]
    let ans = json.result.jawaban
    let clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^calo2$/i
handler.limit = true
module.exports = handler
