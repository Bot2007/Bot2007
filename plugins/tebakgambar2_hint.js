let handler = async (m, { conn }) => {
    conn.tebakgambar2 = conn.tebakgambar2 ? conn.tebakgambar2 : {}
    let id = m.chat
    if (!(id in conn.tebakgambar2)) throw false
    let json = conn.tebakgambar2[id][1]
    let ans = json.result.jawaban
    let clue = ans.replace(/[BCDFGHJKLNMNPQRSTVWXYZ]/g, '_')
    m.reply('```' + clue + '```' + '\n' + 'Note: *Jawaban harus huruf kecil ya*')
}
handler.command = /^hint2$/i
handler.limit = true
module.exports = handler
