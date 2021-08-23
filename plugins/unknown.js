let handler = m => m
handler.before = async (m, { conn }) => {
if (!global.fakethumb) {
}
}
module.exports = handler
