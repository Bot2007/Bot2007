let fetch = require('node-fetch');
let ftype = require('file-type');
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let fs = require ('fs')
let path = require('path')
const moment = require('moment-timezone')
let handler  = async (m, { conn, usedPrefix: _p }) => {
const jamID = moment.tz('Asia/Jakarta').format('HH')
const jamMY = moment.tz('Asia/Kuala_Lumpur').format('HH')
 var ucapanWaktuID = 'Selamat Pagi 🌄'
				if (jamID >= '03' && jamID <= '10') {
				ucapanWaktuID = 'Selamat Pagi 🌄'
				} else if (jamID >= '10' && jamID <= '13') {
				ucapanWaktuID = 'Selamat Siang ☀️'
				} else if (jamID >= '13' && jamID <= '18') {
				ucapanWaktuID = 'Selamat Sore 🌅'
				} else if (jamID >= '18' && jamID <= '23') {
				ucapanWaktuID = 'Selamat Malam 🌙'
				} else {
				ucapanWaktuID = 'Selamat Malam 🌙'
				}
  var ucapanWaktuMY = 'Selamat Pagi 🌄'
				if (jamMY >= '01' && jamMY <= '10') {
				ucapanWaktuMY = 'Selamat Pagi 🌄'
				} else if (jamMY >= '10' && jamMY <= '13') {
				ucapanWaktuMY = 'Selamat Tengahari ☀️'
				} else if (jamMY >= '13' && jamMY <= '18') {
				ucapanWaktuMY = 'Selamat Petang 🌅'
				} else if (jamMY >= '18' && jamMY <= '22') {
				ucapanWaktuMY = 'Selamat Tengah Malam 🌙'
				} else {
				ucapanWaktuMY = 'Selamat Malam 🌙'
				}        
const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `status@broadcast` }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./src/TaufikBot.png`)}, "title": "𝐌𝐄𝐍𝐔 𝐓𝐀𝐔𝐅𝐈𝐊 𝐁𝐎𝐓", "description": "Taufik Bot", "currencyCode": "MYR", "priceAmount1000": "999999999", "retailerId": "TaufikBot", "productImageCount": 1}, "businessOwnerJid": `601173093564@s.whatsapp.net`}}}
let TaufikComel = conn
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let nomor = 'wa.me/601173093564'
  let sosmed = 'TaufikYT'
  let jadwal = '24 Jam'
  let github = 'https://github.com/taufikmusa07/Taufikbot'
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'))) 
    let exp = global.DATABASE.data.users[m.sender].exp
    let level = global.DATABASE.data.users[m.sender].level
    let wang = global.DATABASE.data.users[m.sender].wang 
    let limit = global.DATABASE.data.users[m.sender].limit
    let rank = global.DATABASE.data.users[m.sender].rank
    let name = TaufikComel.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let tags = {
  'main': 'Main',
  'about': 'About atau info Taufik Bot',
  'topup': 'Topup/Beli Limit',
  'game': 'Game',
  'rpg': 'Game RPG',
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
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
°♡ɞ${conn.getName(conn.user.jid)}ʚ♡°
${ucapanWaktuID}(Indonesia)
${ucapanWaktuMY}(Malaysia)

*╭─━•❈«❬ Biodata user ❭»❈•━─╮*
┣➥ Nama : *%name*
┣➥ Level : *%level*
┣➥ Exp : *%exp XP*
┣➥ Limit :  *%limit Limit*
┣➥ Rank : *%rank*
┣➥ Wang : *RM%wang*
┣➥ Nomor owner bot : @%owner
┣   
*╰─━━━━━━━━━━━━━━━━─╯*
*╭─━•❈«❬ Information ❭»❈•━─╮*
┣➥ Ketik %pinv untuk melihat
┣   keseluruhan isi dompet anda
┣   seperti crate, armor dan pet
*╰─━━━━━━━━━━━━━━━━─╯*
*╭─━•❈«❬ Hari ini ❭»❈•━─╮*
┣➥ Hari : *%week*
┣➥ Weton : *%weton*
┣➥ Tanggal Islam : 
┣➥ *%dateIslamic*
┣➥ Tanggal : *%date*
┣➥ Waktu : *%time*
┣➥ Online : *%uptime*
┣➥ Total User : *%totalreg Nomor*
┣➥ Prefix yang anda gunakan : *'%p'*
*╰─━━━━━━━━━━━━━─╯*
*╭─━•❈«❬ Sosial media ❭»❈•━─╮*
┣➥ YouTube : *${sosmed}*
┣➥ Instagram : *@taufikmusa07*
┣➥ FaceBook : *${sosmed}*
*╰─━━━━━━━━━━━━━━━━─╯*
*╭─━•❈«❬ Fitur ❭»❈•━─╮*
┣➥ 365+
*╰─━━━━━━━━━━━━─╯*

%readmore`
    let header = conn.menu.header || '*╭─━•❈«❬ %category ❭»❈•━─╮*'
    let body   = conn.menu.body   || '┣ %cmd%islimit'
    let footer = conn.menu.footer || '*╰─━━━━━━━━━━━━*\n'
    let after  = conn.menu.after  || `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      owner:, global.conn.user.jid.replace(/@.+/, ''),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, level, limit, wang, rank, name, dateIslamic, weton, week, date, time, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
  m.reply(text.trim(), null, { contextInfo: { mentionedJid: global.conn.user.jid , forwardingScore: 508, isForwarded: true, "externalAdReply": {
                  "title": "Taufik Bot",
                  "body": "MENU TAUFIK BOT",
                  "mediaType": "VIDEO",
                  "thumbnailUrl": "https://i.ibb.co/0tbBShq/IMG-20210705-WA0886.jpg",
                  "mediaUrl": "https://instagram.com/taufikmusa07",
                  "thumbnail": ""
                } }, quoted: ftoko})
} catch (e) {
  TaufikComel.reply(m.chat, 'Menu Sedang Erorr!', m)
    throw e
  }
}
handler.help = ['menu','help']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
