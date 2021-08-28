let handler = m => m
handler.before = m => {
  let jids = [...new Set([...(m.mentionedJid || [])])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[jid]
    if (!user) continue
    let Owner = user.owner
    if (!Owner) continue
    m.reply(`Apa sih tag tag ownerku`.trim(), null, { thumbnail: global.fakethumb })
  }
  return true
}

module.exports = handler
