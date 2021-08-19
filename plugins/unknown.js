module.exports = async (m, { conn }) => global.fakethumb = await (await require('node-fetch')('https://i.ibb.co/0tbBShq/IMG-20210705-WA0886.jpg')).buffer()
