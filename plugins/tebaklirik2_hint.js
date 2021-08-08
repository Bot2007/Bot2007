let handler = async (m, { conn }) => {
    conn.tebaklirik2 = conn.tebaklirik2 ? conn.tebaklirik2 : {}
    let id = m.chat
    if (!(id in conn.tebaklirik2)) throw false
    let json = conn.tebaklirik2[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^teli2$/i

module.exports = handler
