const xpperlimit = 1750 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy|buylimit/i, '')
  count = command.replace(/^buy|buylimit/i, '') ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE._data.users[m.sender].exp >= xpperlimit * count && global.DATABASE._data.users[m.sender].wang >= 1 * count) {
    global.DATABASE._data.users[m.sender].exp -= xpperlimit * count
    global.DATABASE._data.users[m.sender].wang -= 1 * count
    global.DATABASE._data.users[m.sender].limit += count
    conn.reply(m.chat, `-${xpperlimit * count} XP dan -RM${1 * count}\n+ ${count} Limit`, m)
  } else conn.reply(m.chat, `XP dan Wang tidak mencukupi untuk membeli ${count} limit`, m)
}
handler.help = ['buy<jumlah limit>', 'buy <jumlah limit>', 'buyall', 'buylimit<jumlah limit>', 'buylimit <jumlah limit>', 'buylimitall']
handler.tags = ['xp']
handler.command = /^buy([0-9]+)|buylimit|buy|buyall|buylimitall$/i
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

