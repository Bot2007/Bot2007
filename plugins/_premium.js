let handler = m => m
handler.before = async (m, { conn }) => {
    if (!m.isGroup && global.DATABASE.data.chats[m.chat].premium != 0) {
        if (new Date() * 1 >= global.DATABASE.data.chats[m.chat].premium) {
            let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (m.chat.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
            global.prems.splice(index, 1)
            let mentionedJid = [m.chat]
            m.reply(`Masa premium @${m.chat.split`@`[0]} sudah berakhir\n*Chat owner jika ingin premium lagi*`.trim(), null, { contextInfo: { mentionedJid }}).then(() => {
                        global.DATABASE.data.chats[m.chat].premium = 0
                    })
        }
    }
}
module.exports = handler
