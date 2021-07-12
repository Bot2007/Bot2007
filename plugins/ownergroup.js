let handler = async (m, { text }) => {
  let who = m.chat.split`-`[0]
  let mentionedJid = [groupAdmins.concat(${m.chat.split`-`[0]})]
  m.reply(`@${who.replace(/@.+/, '')}`.trim(), null, {
    contextInfo: { mentionedJid }
  })
}

handler.command = ['ownergroup']
handler.group = true
module.exports = handler
