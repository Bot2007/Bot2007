let handler = async (m, { usedPrefix }) => m.reply(`Ya saya bot, nak mulakan bot, ketik ${usedPrefix}menu  
`.trim(), null, { thumbnail: require('fs').readFileSync('./src/TaufikBot.png')})
handler.help = ['bot']
handler.tags = ['bot']
handler.command = /^bot$/i

module.exports = handler
