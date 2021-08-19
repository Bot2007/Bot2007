let fs = require ('fs')
let handler  = async (m, { conn, usedPrefix }) => {       
let TaufikComel = conn
  try {
    let tags = {
  'main': 'Main',
  'about': 'Info Taufik Bot',
  'topup': 'Topup/Beli Limit',
  'game': 'Game',
  'audio': 'Audio',
  'virus': 'Virus',
  'rpg': 'Game RPG',
  'shorturl': 'Shorturl(Xteam)',
  'wibu': 'Wibu',
  'sange': 'NSFW',
  'image': 'Gambar',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'anime': 'Anime',
  'kerang': 'Kerang Ajaib',
  'expression': 'Perasaan',
  'quotes': 'Quotes',
  'admin': 'Admin',
  'group': 'Group',
  'premium': 'Premium',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'nulis': 'MagerNulis & Logo',
  'creator': 'Creator',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database',
  'vote': 'Voting',
  'absen': 'Absen',
  'quran': 'Al Quran',
  'islam': 'Islam',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    let header = '*╭─━•❈«❬ %category ❭»❈•━─╮*'
    let body   = '┣ %cmd%islimit'
    let footer = '*╰─━━━━━━━━━━━━*\n'
    let after  = ``
    let _text = '' 
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : usedPrefix + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    m.reply(_text.trim(), null,  { thumbnail: global.fakethumb, contextInfo: { forwardingScore: 508, isForwarded: true, "externalAdReply": {
                  "title": "Taufik Bot",
                  "body": "MENU TAUFIK BOT",
                  "mediaType": "VIDEO",
                  "thumbnailUrl": "https://i.ibb.co/0tbBShq/IMG-20210705-WA0886.jpg",
                  "sourceUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                } }, quoted: ftoko})
} catch (e) {
  TaufikComel.reply(m.chat, 'Menu Sedang Erorr!', m)
    throw e
  }
}
handler.help = ['testmenu']
handler.tags = ['main']
handler.command = /^(testmenu)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
module.exports = handler
