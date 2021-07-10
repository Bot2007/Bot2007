let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')

const defaultLang = 'id'
let handler = async (m, { conn, usedPrefix, args }) => {
  let er = `Format anda salah

Contoh penggunaan:
${usedPrefix}tts id Taufik hensem terlajak
    `.trim()
    if (!args[0]) throw er
  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  let eo = `Teksnya mana?
    `.trim()
    if (!text) throw eo
  if (!text && m.quoted && m.quoted.text) text = eo

  let res 
  try { res = await tts(text, lang) }
  catch (e) {
  m.reply('Kode bahasa anda salah. Ketik ${usedPrefix}kodebahasa untuk melihat kode bahasa yang support')
  res = await tts(text)
  } finally { 
    m.reply('Sedang merekam')
  conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
}
handler.help = ['tts <lang> <teks>']
handler.tags = ['tools']
handler.command = /^g?tts$/i
module.exports = handler

function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(fs.readFileSync(filePath))
        fs.unlinkSync(filePath)
      })
  })
}
