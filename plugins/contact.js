let handler = async (m, { conn, text }) => {
  if (!text) return
  let cm = JSON.parse(JSON.stringify(m))
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  if (!who) throw 'Tag salah satu lah'
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
}
handler.help = ['save'].map(v => v + ' @mention <ContactName>')
handler.tags = ['']

handler.command = /^save$/

module.exports = handler
