let fs = require ('fs')
let handler  = async (m, { from, conn }) => {
const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `status@broadcast`, }, message: { "contactMessage": { "displayName": `Taufik Owner/Botku`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;Taufik,;;;\nFN:Taufik Bot,\nitem1.TEL;waid=601173093564:601173093564\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./src/TaufikBot.png')}}}
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "contactsArrayMessage": {
          "displayName": "‎2 kenalan",
          "contacts": [
            {
              "displayName": "+18654655888",
              "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;+18654655888;;;\nFN:+18654655888\nitem1.TEL;waid=18654655888:+1 (865) 465-5888\nitem1.X-ABLabel:Telefon\nEND:VCARD"
            },
            {
              "displayName": "Taufik",
              "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Taufik;;;\nFN:Taufik\nitem1.TEL;waid=601110910716:+60 11-1091 0716\nitem1.X-ABLabel:Telefon\nEND:VCARD"
            }
          ],
                        "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}, quoted: fkon
                    }
                 }, {}), {waitForAck: true}).then((res) => m.reply(`Ini ownerku yang tercinta`.trim(), null, { contextInfo: { mentionedJid: m.sender }, quoted: res}))
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
