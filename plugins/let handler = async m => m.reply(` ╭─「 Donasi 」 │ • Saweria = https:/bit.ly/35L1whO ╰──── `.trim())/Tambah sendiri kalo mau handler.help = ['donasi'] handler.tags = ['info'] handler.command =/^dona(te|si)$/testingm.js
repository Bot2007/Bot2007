let handler = async m => m.reply(`
Owner: ${global.conn.user.jid}
Anda: ${m.sender}
`.trim()) //
handler.help = ['testingm']
handler.tags = ['info']
handler.command = /^testingm$/i

module.exports = handler
