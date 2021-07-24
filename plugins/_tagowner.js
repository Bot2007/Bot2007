let handler = m => m
handler.before = m => {
let jids = [...new Set([...(m.mentionedJid || [])])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[global.conn.user.jid]
    if (!user) continue
    m.reply(`Apa sih tag tag ownerku`.trim())
  }
  return true
}

module.exports = handler
