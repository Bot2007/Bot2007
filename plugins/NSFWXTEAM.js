let handler = async (m, { conn, command }) => {
  let res = global.API('xteam', '/randomimage/' + command, {}, 'APIKEY')
  conn.sendFile(m.chat, res, 'nsfw.jpg', `tobat woi`, m, false)
}
handler.help = ['ass','panties','pussy','nsfwneko','mstrb','jahy','hentai','cuckold','tentacles','thighs','uniform','wpnsfwmobile', 'hentaigif']
handler.tags = ['sange']

handler.command = /^(ass|panties|pussy|nsfwneko|hentai|mstrb|jahy|cuckold|tentacles|thighs|uniform|wpnsfwmobile|hentaigif)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true
// Original made by Taufik
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

