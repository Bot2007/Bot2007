let handler = async (m, { text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  m.reply(text + '\n' + `@${who.replace(/@.+/, '')}`.trim(), null, {
    contextInfo: { mentionedJid }
  })
}
handler.command = ['tagme', 'tag']
module.exports = handler
