let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
let handler  = async (m, { conn, args }) => {
   json = (await axios.get('https://meme-api.herokuapp.com/gimme/animebooty')).data
   conn.sendFile(m.chat, json.url, 'ass.jpg', '', m, false)
}
handler.help = ['ass2']
handler.tags = ['sange']
handler.command = ['ass2']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
