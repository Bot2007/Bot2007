let handler = async (m, { conn, text, participants }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  m.reply(text + '\n' + `@${who.replace(/@.+/, '')}`.trim(), null, {
    contextInfo: { [who] }
  })
}
handler.command = ['tagme']

handler.owner = true
handler.group = true

module.exports = handler
