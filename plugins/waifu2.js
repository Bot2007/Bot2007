let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://recoders-area.caliph.repl.co/api/waifu?apikey=FreeApi`
  conn.sendFile(m.chat, res, 'waifu.jpg', `Istri kartun`, m, false)
}
handler.help = ['waifu2'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = ['waifu2']

module.exports = handler