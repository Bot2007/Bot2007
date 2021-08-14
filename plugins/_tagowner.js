let handler = m => m
handler.before = async (m, { conn }) => {
    if (m.isGroup) {
    if (m.mentionedJid == [global.conn.user.jid]) {
    m.reply(`Apa sih tag tag ownerku`.trim(), null, { thumbnail: require('fs').readFileSync('./src/TaufikBot.png')})
}
        
    }
}
module.exports = handler
