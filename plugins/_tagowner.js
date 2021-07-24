let handler = m => m
handler.before = m => {
  let jids = [...new Set([...(m.mentionedJid || [])])]
  let jid = global.conn.user.jid
  for (let jid of jids) {
    m.reply(`Apa sih tag tag ownerku`.trim())
  }
  return true
}

module.exports = handler
