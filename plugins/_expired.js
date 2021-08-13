let handler = m => m
handler.before = async (m, { conn }) => {
    if (m.isGroup && global.DATABASE.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.DATABASE.data.chats[m.chat].expired) {
            conn.reply(m.chat, `Waktunya *${conn.user.name}* untuk meninggalkan grup :(\n*Chat owner jika ingin sewa bot lagi*`, null, null, { contextInfo: { mentionedJid: users } }).then(() => {
                conn.sendContact(m.chat, '601173093564', 'Taufik', m).then(() => {
                    conn.groupLeave(m.chat).then(() => {
                        global.DATABASE.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}
module.exports = handler
