let fetch = require('node-fetch') 
let handler  = async (m) => {
  let res = await fetch('https://raw.githubusercontent.com/BochilGaming/Rest-Api/main/src/data/truth.json')
  let json = await res.json()
  m.reply(pickRandom(json))
}
handler.help = ['truth2']
handler.tags = ['quotes']
handler.command = ['truth2']

module.exports = handler

function pickRandom(list) {
  return list[Math.round(Math.random() * list.length)]
}
