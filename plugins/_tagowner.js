let handler = m => m
handler.before = async (m, { conn }) => {
    if (m.isGroup) {
    let jids = [...new Set([...(m.mentionedJid || [])])]
    for (let jid of jids) {
    let user = global.DATABASE.data.users[jid].owner
    if (!user) return
    m.reply(`Apa sih tag tag ownerku`.trim(), null, { thumbnail: global.fakethumb })
  }
}
  return
}
module.exports = handler
