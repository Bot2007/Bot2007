let handler = async(m, { conn, text }) => {
  if (!text) { 
  global.prefix = /^[‎xzXZ/i!#\$%\+£¢€¥\^°=¶∆×÷π√✓©®:;\?&\.\\\-]/
  m.reply(`Prefix berhasil direset`)
  return }
  global.prefix = /^[ + text + ]/
  await m.reply(`Prefix telah ditukar ke *${text}*`)
}
handler.help = ['setprefix'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(setprefix)$/i

handler.rowner = true

module.exports = handler
