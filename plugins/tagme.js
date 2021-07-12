let handler = async (m, { text }) => {
  let who = m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  m.reply('Nih gw tag buat lo ' + `@${who.replace(/@.+/, '')}`.trim(), null, {
    contextInfo: { mentionedJid }
  })
}
handler.command = ['tagme', 'me']
module.exports = handler
