let handler = m => m
handler.before = async (m, { conn }) => {
    if (!m.isGroup && global.DATABASE.data.chats[m.chat].premium != 0) {
        if (new Date() * 1 >= global.DATABASE.data.chats[m.chat].premium) {
            let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (m.chat.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
            global.prems.splice(index, 1)
            conn.reply(m.chat, `Masa premium kamu sudah berakhir\n*Chat owner jika ingin premium lagi*`, null).then(() => {
                        global.DATABASE.data.chats[m.chat].premium = 0
                    })
        }
    }
}
module.exports = handler
