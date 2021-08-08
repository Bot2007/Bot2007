let handler = async (m, { conn }) => {
    conn.tekateki2 = conn.tekateki2 ? conn.tekateki2 : {}
    let id = m.chat
    if (!(id in conn.tekateki2)) throw false
    let json = conn.tekateki2[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = ['tete2']

module.exports = handler
