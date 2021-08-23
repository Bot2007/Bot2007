let handler = async (m, { usedPrefix, command }) => {

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `ini tu gunanya buat ngambil caption yang ada digambar, kirim/balas gambar dengan perintah ${usedPrefix + command}`
    if (/(image|video)\/(jpe?g|png)/.test(mime)) return m.reply((q.msg || q).caption)
    else throw 'Gak ada caption'
}
handler.help = ['takecaption']
handler.tags = ['tools']
handler.command = /^takecaption$/i
handler.limit = true
module.exports = handler
