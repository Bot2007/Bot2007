let handler = m => m
handler.before = async (m, { conn }) => {
    if (m.isGroup && m.mentionedJid == global.conn.user.jid) { 
        m.reply(`Apa sih tag tag ownerku`.trim(), null, { thumbnail: global.fakethumb })
    }
    return
}
module.exports = handler
