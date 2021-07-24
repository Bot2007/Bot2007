let handler = m => m
handler.before = (m, { conn }) => {
  let mentionedJid = [global.conn.user.jid]
  let jids = [...new Set([...(mentionedJid || [])])]
  for (let jid of jids) {
     m.reply(`Apa sih tag tag ownerku`.trim())
  }
  return true
}

module.exports = handler
