let handler = async (m,{ conn }) => {
            global.fakethumb = await (await require('node-fetch')('https://i.ibb.co/0tbBShq/IMG-20210705-WA0886.jpg')).buffer()
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
                        ]
                    }
                 }, { quoted: m }), {waitForAck: true})

    conn.send2Button(m.chat, `Hehe ownerku di bawah ya tq`.trim(), 'made with ❤️ by Taufik', 'OWNER', '.owner', 'DONASI', '.donasi')}
handler.command = /^(menu|help)$/i

module.exports = handler
