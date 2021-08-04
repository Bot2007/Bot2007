let handler  = async (m, { conn }) => { 
  if (!m.fromMe) m.reply('Waalaikumsalam')
  conn.chatRead(m.chat)
}
handler.customPrefix = /aslm|assalam/i
handler.command = new RegExp
module.exports = handler
