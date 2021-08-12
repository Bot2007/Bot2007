let fs = require ('fs')
let handler  = async (m, { from, conn }) => {
const fkon = { key: { id: m.key.id, fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `status@broadcast`, }, message: { "contactMessage": { "displayName": `Taufik Owner/Botku`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;Taufik,;;;\nFN:Taufik Bot,\nitem1.TEL;waid=601173093564:601173093564\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./src/TaufikBot.png')}}}
  let Yoko = conn.prepareMessageFromContent(m.chat, {
                    "contactsArrayMessage": {
          "displayName": "‎Ini ownerku ya",
          "contacts": [
            {
              "displayName": "Taufik(Owner)",
              "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Taufik(Owner);;;\nFN:Taufik(Owner)\n'ORG:+60 11 3666 0069\nTITLE:+60 11 3666 0069\nitem1.TEL;waid=601136660069:+60 11-3666 0069\nitem1.X-ABLabel:Telefon\nitem2.EMAIL;type=INTERNET:Taufik Bot\nitem2.X-ABLabel:Kerja\nEND:VCARD"
            },{},{},{},{},{},{},{},{},{},{}
          ]
                    }
                 }, { quoted: fkon })
          conn.relayWAMessage(Yoko, {waitForAck: true})
          m.reply(`Ini ownerku yang tercinta`.trim(), null, { contextInfo: { mentionedJid: m.sender }, quoted: Yoko, thumbnail: require('fs').readFileSync('./src/TaufikBot.png')})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
