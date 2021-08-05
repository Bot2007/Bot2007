let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.sender
    let healt = global.DATABASE._data.users[who].healt
    let wang = global.DATABASE._data.users[who].wang
    let armor = global.DATABASE._data.users[who].armor 
    let warn = global.DATABASE._data.users[who].warn
    let pet = global.DATABASE._data.users[who].pet
    let kucing = global.DATABASE._data.users[who].kucing
    let _kucing = global.DATABASE._data.users[who].anakkucing
    let rubah = global.DATABASE._data.users[who].rubah
    let _rubah = global.DATABASE._data.users[who].anakrubah
    let kuda = global.DATABASE._data.users[who].kuda
    let _kuda = global.DATABASE._data.users[who].anakkuda
    let diamond = global.DATABASE._data.users[who].diamond
    let potion = global.DATABASE._data.users[who].potion
    let common = global.DATABASE._data.users[who].common
    let makananpet = global.DATABASE._data.users[who].makananpet
    let uncommon = global.DATABASE._data.users[who].uncommon
    let mythic = global.DATABASE._data.users[who].mythic
    let legendary = global.DATABASE._data.users[who].legendary
    let level = global.DATABASE._data.users[who].level
    let money = global.DATABASE._data.users[who].money
    let exp = global.DATABASE._data.users[who].exp
    let sampah = global.DATABASE._data.users[who].sampah
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = conn.getName(who)
    let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedwang = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].wang - a[1].wang)
    let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userswang = sortedwang.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `
Inventory *${name}*\n
Health: *${healt}*
Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*\n
Money: *${money}*
Level: *${level}*
Wang: *RM${wang}* 
Exp: *${exp}*\n
*Inventory*
Diamond: *${diamond}*
Potion: *${potion}*
Sampah: *${sampah}*
Makanan Pet: *${makananpet}*
Total inv: *${diamond + potion + sampah + makananpet}* item\n
*Crate*
Common: *${common}*
Uncommon: *${uncommon}*
Mythic: *${mythic}*
Legendary: *${legendary}*
Pet: *${pet}*
Total crate: *${common + uncommon + mythic + legendary + pet}* crate\n
*Pet*
Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*\n\n
*Proges*\n
╭────────────────
│Level *${level}* To Level *${level}*
│Exp *${exp}* -> *${max}*
╰────────────────
╭────────────────
│Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────\n\n
*achievement*
1.Top level *${userslevel.indexOf(who) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(who) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(who) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(who) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(who) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(who) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(who) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(who) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(who) + 1}* dari *${userssampah.length}*
10.Top Wang *${userswang.indexOf(who) + 1}* dari *${userswang.length}*

\n${readMore}\n
Warn: *${warn}*
Banned: *No*
`.trim()
    conn.reply(m.chat, str, m)
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
