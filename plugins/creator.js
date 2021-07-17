let fs = require ('fs')
let handler  = async (m, { from, conn }) => {
const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `status@broadcast`, }, message: { "contactMessage": { "displayName": `Taufik Owner/Botku`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;Taufik,;;;\nFN:Taufik Bot,\nitem1.TEL;waid=601173093564:601173093564\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./src/TaufikBot.png')}}}
conn.sendContact(m.chat, '601173093564', 'Taufik', null, { contextInfo: {
    mentionedJid: m.sender }, quoted: fkon}).then((res) => m.reply(`Ini ownerku yang tercinta`.trim(), null, { contextInfo: { mentionedJid: m.sender }, quoted: res}))
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
