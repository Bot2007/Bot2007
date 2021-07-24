let handler = async (m, { conn }) => {
  let jids = [...new Set([...(m.mentionedJid || [])])]
  for (let global.conn.user.jid of jids) {
    m.reply(`Apa sih tag tag ownerku`.trim())
  }
  return true
}

module.exports = handler
