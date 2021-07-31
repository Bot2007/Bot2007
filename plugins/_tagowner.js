let handler = m => m
handler.before = m => {
  let jids = [...new Set([...(['601173093564@s.whatsapp.net'])])]
  for (let jid of jids) {
    if (!jid) return true
    m.reply('Apa sih tag tag ownerku')
  }
  return true
}

module.exports = handler
