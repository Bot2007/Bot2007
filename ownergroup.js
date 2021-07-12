let handler = async (m, { text }) => {
  let who = m.chat.split`-`[0]
  let mentionedJid = [m.chat.split`-`[0]]
  m.reply(`@${who.replace(/@.+/, '')}`.trim(), null, {
    contextInfo: { mentionedJid }
  })
}
handler.command = ['ownergroup']
module.exports = handler
