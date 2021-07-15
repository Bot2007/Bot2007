let fs = require ('fs')
let handler  = async (m, { from, text, conn }) => {
const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `1625623054@broadcast`, }, message: { "contactMessage": { "displayName": `Ini owner/bot ku`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;Taufik,;;;\nFN:Taufik Bot,\nitem1.TEL;waid=601173093564:601173093564\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./src/TaufikBot.png')}}}
conn.sendContact(m.chat, '601173093564', 'Taufik HENSEM', null, {contextInfo: {
    mentionedJid: m.sender }, quoted: fkon})
   .then((res) => conn.sendMessage(from, 'Nih kontak ownerku', text, {quoted: res}))
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
