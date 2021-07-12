let handler = async (m, { text, participants }) => {
  const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let groupAdmins = getGroupAdmins(participants)
    let listAdmin = groupAdmins.map((v) => `@${v.split('@')[0]}`).join('\n')
    let admin = `${listAdmin}`.trim()
  m.reply(text + '\n' + admin, null, {
    contextInfo: { mentionedJid: groupAdmins }
  })
}
handler.command = ['listadmin', 'admin', 'tagadmin']
handler.group = true

module.exports = handler
