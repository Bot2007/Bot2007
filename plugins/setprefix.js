let handler = async(m, { conn, text, command }) => {
  if (!text) throw 'Prefixnya mana?'
  let prefix = /^[‎xzXZ/i!#\$%\+£¢€¥\^°=¶∆×÷π√✓©®:;\?&\.\\\-]/
  if (/^resetprefix$/i.test(command)) { 
  global.prefix = prefix
  m.reply(`Prefix berhasil direset`)
  return }
  global.prefix = new RegExp('^[' + text + ']')
  await m.reply(`Prefix telah ditukar ke *${text}*`)
}
handler.help = ['setprefix [prefix]', 'resetprefix']
handler.tags = ['owner']
handler.command = /^(set|reset)prefix$/i
handler.customPrefix = prefix
handler.rowner = true

module.exports = handler
