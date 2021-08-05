let handler = async (m,{ conn }) => {
            conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "",
                        "description": "Hai, saya Taufik Bot, Pilih di bawah ya untuk menu",
                        "footerText": "Jangan lupa Donasi ya hehe❤",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `MENU`,
                                        "description": "\n*I Want To Use Menu Bot*",
                                        "rowId": ".menubot"
                                    }
                                ]
                            }
                        ],
                        "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

    conn.send2Button(m.chat, `Hehe ownerku di bawah ya tq`.trim(), 'made with ❤️ by Taufik', 'OWNER', '.owner', 'DONASI', '.donasi')}
handler.command = /^(menu|help)$/i

module.exports = handler
