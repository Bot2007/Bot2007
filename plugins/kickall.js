let handler = async (m, { conn, args, participants }) => {
         let users = participants.map(u => u.jid)
       let using = users.filter(u => !(u == isOwner || u.includes(conn.user.jid)))
                for (let member of using) {
                if (global.opts['restrict']) {
                if (member.endsWith('@s.whatsapp.net')) 
                await delay(3000)
                await conn.groupRemove(from, [member])
                }
               await m.reply(m.chat, 'Sukses Kick All Member', m)
}
}
handler.help = ['kickall'].map(v => v.jid)
handler.tags = ['group']
handler.command = /^(kickall)$/i
handler.rowner = false
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler

