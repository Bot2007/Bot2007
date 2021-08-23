let handler = m => m
handler.before = async (m, { conn }) => {
if (!global.fakethumb) {
global.fakethumb = await (await require('node-fetch')('https://i.ibb.co/0tbBShq/IMG-20210705-WA0886.jpg')).buffer()
}
else return
}
module.exports = handler
