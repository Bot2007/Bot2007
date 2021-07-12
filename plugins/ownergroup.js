let handler = async (m, { text }) => {
  let who = m.chat.split`-`[0]
  ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
  m.reply(`@${who.replace(/@.+/, '')}`.trim(), null, {
    contextInfo: { mentionedJid }
  })
}

handler.command = ['ownergroup']
handler.group = false
module.exports = handler
