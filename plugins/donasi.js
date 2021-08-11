let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Saweria = https://bit.ly/35L1whO
╰────
`.trim(), null, { thumbnail: require('fs').readFileSync('./src/TaufikBot.png')}) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
