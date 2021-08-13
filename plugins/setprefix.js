let handler = async(m, { conn, text, command }) => {
  if (/^resetprefix$/i.test(command)) { 
  global.prefix = /^[‎xzXZ/i!#\$%\+£¢€¥\^°=¶∆×÷π√✓©®:;\?&\.\\\-]/
  m.reply(`Prefix berhasil direset`)
  return }
  global.prefix = new RegExp('^[' + text + ']')
  await m.reply(`Prefix telah ditukar ke *${text}*`)
}
handler.help = ['setprefix [prefix]', 'resetprefix']
handler.tags = ['owner']
handler.command = /^(setprefix)$/i

handler.rowner = true

module.exports = handler
