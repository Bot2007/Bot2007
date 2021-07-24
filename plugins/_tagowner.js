let handler = async (m, { conn }) => {
  let jids = [...new Set([...(m.mentionedJid[601173093564] || [])])]
  for (let jid of jids) {
    m.reply(`Apa sih tag tag ownerku`.trim())
  }
  return true
}

module.exports = handler
