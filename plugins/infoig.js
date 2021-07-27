let axios = require('axios');
let handler = async (m, { conn, text }) => {
  axios.get(`https://alfians-api.herokuapp.com/api/stalk?username=${teks}`).then ((res) => {
  let hasil = `BIODATA INSTAGRAM ATAS NAMA _${teks}_ \n\n *Username* : _${res.data.Username}_ \n *Nama* : _${res.data.Name}_ \n *Jumlah Followers* : _${res.data.Jumlah_Followers}_ \n *Jumlah Following* : _${res.data.Jumlah_Following}_ \n *Jumlah Post* : _${res.data.Jumlah_Post}_ `
  conn.sendFile(m.chat, '${res.data.Profile_pic}', 'Ok.png', hasil.trim(), m)

handler.help = ['infoig']
handler.tags = ['internet']
handler.command = /^(infoig)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
