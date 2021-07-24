let handler = m => m
handler.before = m => {
  let jids = [...new Set([...(['601173093564@s.whatsapp.net'])])]
  for (let jid of jids) {
     m.reply(`Apa sih tag tag ownerku`.trim())
  }
  return true
}

module.exports = handler
