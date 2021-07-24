let handler = m => m
handler.before = (m, { conn }) => {
  let jids = [...new Set([...(m.mentionedJid || [])])]
  let Taufik = global.conn.user.jid
  for (let Taufik of jids) {
    m.reply(`Apa sih tag tag ownerku`.trim())
  }
  return true
}

module.exports = handler
