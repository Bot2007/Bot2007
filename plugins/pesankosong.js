let handler = async m => m.reply(``.trim())
handler.help = ['pesankosong']
handler.tags = ['tools']
handler.command = /^(pesankosong)$/i

module.exports = handler
