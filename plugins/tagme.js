let handler = async (m, { text }) => {
  let who = 
  m.reply(text + '\n' + '@${who.replace(/@.+/, '')}', null, {
    contextInfo: { mentionedJid: m.sender }
  })
}
handler.command = ['tagme']

handler.owner = true
handler.group = true

module.exports = handler
