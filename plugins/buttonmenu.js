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
                        "participant": m.key.remote,
                        "quotedMessage": {
                        "conversation": m
                       }
                     }
                   }
                 }, {}), {waitForAck: true})
handler.command = /^(menu)$/i

module.exports = handler
