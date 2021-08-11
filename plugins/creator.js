let fs = require ('fs')
let handler  = async (m, { from, conn }) => {
const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `status@broadcast`, }, message: { "contactMessage": { "displayName": `Taufik Owner/Botku`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;Taufik,;;;\nFN:Taufik Bot,\nitem1.TEL;waid=601173093564:601173093564\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./src/TaufikBot.png')}}}
  let Yoko = conn.prepareMessageFromContent(m.chat, {
                    "contactsArrayMessage": {
          "displayName": "‎Ini ownerku ya tolol",
          "contacts": [
            {
              "displayName": "Taufik(Owner)",
              "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Taufik(Owner);;;\nFN:Taufik(Owner)\nitem1.TEL;waid=601173093564:+60 11-7309 3564\nitem1.X-ABLabel:Telefon\nEND:VCARD"
            }
          ],
                        "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}, quoted: fkon
                    }
                 }, {})
          conn.relayWAMessage(Yoko, {waitForAck: true})
          m.reply(`Ini ownerku yang tercinta`.trim(), null, { contextInfo: { mentionedJid: m.sender }, quoted: Yoko})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
