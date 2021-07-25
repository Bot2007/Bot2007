let handler = async (m,{ conn }) => 
            conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "@taufikmusa07",
                        "description": "MENU BOT",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `MENU BOT TAUFIK`,
                                        "rowId": ".menu"
                                    }
                                ]
                            }
                        ]
                    }
                }, {}), {waitForAck: true})
handler.command = /^(menubot)$/i

module.exports = handler
