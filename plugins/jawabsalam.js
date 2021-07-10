let handler  = async (m, { conn }) => { 
  m.reply('Waalaikumsalam')
  let Waalaikumsalam = './src/Waalaikumsalam.mp3'
  conn.sendFile(m.chat, Waalaikumsalam, 'salam.opus', null, m, true)
  conn.chatRead(m.chat)
}
handler.help = ['Jawabsalam']
handler.tags = ['kerang']
handler.customPrefix = /aslm|assalam/i
handler.command = new RegExp
module.exports = handler
