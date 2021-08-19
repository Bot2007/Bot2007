let handler = async (m, { usedPrefix }) => m.reply(`Ya saya bot, mahu memulai bot, ketik ${usedPrefix}menu  
`.trim(), null, { thumbnail: global.fakethumb})
handler.help = ['bot']
handler.tags = ['bot']
handler.command = /^bot$/i

module.exports = handler
