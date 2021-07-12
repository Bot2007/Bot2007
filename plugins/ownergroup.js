let handler = async (m, { text }) => {
  const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

  let groupAdmins = getGroupAdmins(participants)
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
