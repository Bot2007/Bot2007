let handler = async (m, { usedPrefix, command }) => {

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `ini tu gunanya buat ngambil caption yang ada digambar, kirim/balas gambar dengan perintah ${usedPrefix + command}`
    if (!(q.msg || q).caption) throw `Gak ada caption`
    if (/image\/(jpe?g|png)/.test(mime)) return m.reply((q.msg || q).caption)
    else if (/video/.test(mime)) return m.reply((q.msg || q).caption)
    else throw 'Format tidak mendukung'
}
handler.help = ['takecaption'].map(v => v + '<video|image>')
handler.tags = ['tools']
handler.command = /^takecaption$/i
handler.limit = true
module.exports = handler
