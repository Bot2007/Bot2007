let handler = async (m,{ conn }) => 
            conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Hai saya Taufik Bot, Pilih di bawah ya untuk menu",
                        "description": "©Taufikbot",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `MENU BOT TAUFIK`,
                                        "rowId": ".menubot"
                                    }
                                ]
                            }
                        ],
                        "contextInfo": {
                        "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
}
                        
                   }
                 }, {}), {waitForAck: true})
handler.command = /^(menu)$/i

module.exports = handler
