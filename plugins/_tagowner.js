let handler = m => m
handler.before = async (m, { conn }) => {
    if (m.isGroup && m.mentionedJid == global.conn.user.jid) return m.reply(`Apa sih tag tag ownerku`.trim(), null, { thumbnail: require('fs').readFileSync('./src/TaufikBot.png')})
}
module.exports = handler
