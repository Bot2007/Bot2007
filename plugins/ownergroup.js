let handler = async (m, { text, participants }) => {
  const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

  let groupAdmins = getGroupAdmins(participants)
  let who = m.chat.split`-`[0]
  ownernya = [`${who}@s.whatsapp.net`]
        let mentionedJid = ownernya
  m.reply(text + '\n' + `@${who}`.trim(), null, {
    contextInfo: { mentionedJid }
  })
}

handler.command = ['ownergroup']
handler.group = false
module.exports = handler
