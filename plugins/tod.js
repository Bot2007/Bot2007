let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  if (/^(tod|truthordare)$/i.test(command)) {
    conn.send3Button(m.chat, 'Truth or Dare', 'made with ❤️ by Taufik', 'TRUTH', '.truth3', 'DARE', '.dare2', 'RANDOM', `${pickRandom(['.dare2', '.truth3'])}`)
  }
  if (/^truth3$/i.test(command)) {
    let res = await fetch(global.API('pencarikode', '/api/truthid', {}, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (json.message == "") throw json
    conn.send3Button(m.chat, json.message, '', 'TRUTH', '.truth3', 'DARE', '.dare2', 'RANDOM', `${pickRandom(['.dare2', '.truth3'])}`)

  }
  if (/^dare2$/i.test(command)) {
    let res = await fetch(global.API('pencarikode', '/api/dareid', {}, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (json.message == "") throw json
    conn.send3Button(m.chat, json.message, '', 'TRUTH', '.truth3', 'DARE', '.dare2', 'RANDOM', `${pickRandom(['.dare2', '.truth3'])}`)

  }
}
handler.help = ['tod','truthordare', 'truth3', 'dare2']
handler.tags = ['fun']
handler.command = /^(tod|truthordare|truth3|dare2)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
