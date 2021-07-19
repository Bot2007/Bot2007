let handler  = async (m, { conn }) => { 
  m.reply('Waalaikumsalam')
  conn.chatRead(m.chat)
}
handler.help = ['Jawabsalam']
handler.tags = ['kerang']
handler.customPrefix = /aslm|assalam/i
handler.command = new RegExp
module.exports = handler
