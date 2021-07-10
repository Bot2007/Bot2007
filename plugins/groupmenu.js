let fetch = require('node-fetch');
let ftype = require('file-type');
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix: _p }) => {
const delay = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `status@broadcast` }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*BY TAUFIK (+601173093564)*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/TaufikBot.png')}}}
const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: `status@broadcast` }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./src/TaufikBot.png`)}, "title": "𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 𝐓𝐀𝐔𝐅𝐈𝐊 𝐁𝐎𝐓", "description": "Taufik Bot", "currencyCode": "MYR", "priceAmount1000": "999999999", "retailerId": "TaufikBot", "productImageCount": 1}, "businessOwnerJid": `601173093564@s.whatsapp.net`}}}
let TaufikComel = conn
  await m.reply(`
Sebentar, Taufik sedang meloading menu
`.trim(), null, {contextInfo: {
    mentionedJid: m.sender }, quoted: delay})
  let TaufikBot = './src/TaufikBot.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let nomor = 'wa.me/601173093564'
  let sosmed = 'TaufikYT'
  let jadwal = '24 Jam'
  let github = 'https://github.com/taufikmusa07/Taufikbot'
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'))) 
    let exp = global.DATABASE.data.users[m.sender].exp
    let level = global.DATABASE.data.users[m.sender].level
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
  'Group': 'Group Menu',
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
    conn.groupmenu = conn.groupmenu ? conn.groupmenu : {}
    let before = conn.groupmenu.before || `
°❀❬ ${conn.getName(conn.user.jid)} ❭❀°


┏━━°❀❬ Biodata User ❭❀°━━┓
┣➥ Nama : *%name*
┣➥ Level : *%level*
┣➥ Exp : *%exp XP*
┣➥ Limit :  *%limit Limit*
┣➥ Rank : *%rank*
┗━━━━━━━━━━━━━━━━

┏━━°❀❬ Hari ini ❭❀°━━┓
┣➥ Hari : *%week*
┣➥ Weton : *%weton*
┣➥ Tanggal Islam : 
┣➥ *%dateIslamic*
┣➥ Tanggal : *%date*
┣➥ Waktu : *%time*
┣➥ Online : *%uptime*
┣➥ Total User : *%totalreg Nomor*
┣➥ Prefix : *%p*
┗━━━━━━━━━━━━━━━━

┏━━°❀❬ Information ❭❀°━━┓
┣➥ Ketik ${usedPrefix}menu untuk
┣   jenis menu yang support
┗━━━━━━━━━━━━━━━━
%readmore`
    let header = conn.groupmenu.header || '┏━━°❀❬ %category ❭❀°━━┓'
    let body   = conn.groupmenu.body   || '┣➥ %cmd%islimit'
    let footer = conn.groupmenu.footer || '┗━━━━━━━━━━━━━━━━\n'
    let after  = conn.groupmenu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Bot Asli :\nwa.me/${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
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
    text =  typeof conn.groupmenu == 'string' ? conn.groupmenu : typeof conn.groupmenu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, level, limit, rank, name, dateIslamic, weton, week, date, time, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
  TaufikComel.sendFile(m.chat, TaufikBot, 'TaufikBot.jpg', text.trim(), m, null, {contextInfo: {
    forwardingScore: 508, isForwarded: true }, quoted: ftoko})
} catch (e) {
  TaufikComel.reply(m.chat, 'Menu Sedang Erorr!', m)
    throw e
  }
}
handler.help = ['groupmenu']
handler.tags = ['jenismenu']
handler.command = /^(groupmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 5
handler.register = false

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
