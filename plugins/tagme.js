let handler = async (m, { text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  m.reply(text + '\n' + `@${who.replace(/@.+/, '')}`.trim(), null, {
    contextInfo: { mentionedJid: who }
  })
}
handler.command = ['tagme']
module.exports = handler
