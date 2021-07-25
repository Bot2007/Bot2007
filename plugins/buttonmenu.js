let handler = async (m,{ conn }) => let menu = conn.prepareMessageFromContent(m.chat, {
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
                                        "rowId": ".menubot"
                                    }
                                ]
                            }
                        ]
                    }
                }, {})
            conn.relayWAMessage(menu, {waitForAck: true})
handler.command = /^(menu)$/i

module.exports = handler
