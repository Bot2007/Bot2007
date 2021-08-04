let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(global.API('xteam', '/game/virtualslot', {}, 'APIKEY')).then ((res) => {
	 	let hasil = `${res.data.map}\nHasil : ${res.data.hasil}\nScore :${res.data.score}`                  

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['slot'].map(v => v + ' [premium]')
handler.tags = ['game']
handler.command = /^(slot)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
