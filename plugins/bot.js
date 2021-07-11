let handler = async (m, { usedPrefix }) => m.reply(`Ya saya bot, nak mulakan bot, ketik ${usedPrefix}menu  
`.trim())
handler.help = ['bot']
handler.tags = ['bot']
handler.command = /^bot$/i

module.exports = handler
