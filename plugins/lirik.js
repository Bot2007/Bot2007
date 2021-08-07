let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix }) => {
    try {
        if (!args || !args[0] || args.length < 1) return m.reply('Judul lagunya apa om?')
        let res = await fetch(global.API('bg', '/lirik', { 
            title: args[0],
            artist: args[1] || '' 
        }))
        let json = await res.json()
        if (json.status !== true) throw json
        m.reply(`
*Lyrics ${args[0]}*
\`\`\`${json.result}\`\`\`
`.trim())
    } catch (e) {
        m.reply('Error!!')
        console.log(e)
    }
}
    
handler.help = ['lirik', 'lyrics'].map(v => ' [title] [artist]')
handler.tags = ['internet']
handler.command = /^(l(irik|yrics))$/i

module.exports = handler
