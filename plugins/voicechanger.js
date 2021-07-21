const fs = require('fs')
const { exec } = require('child_process')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        let set
        if (/bassmp3/.test(command)) set = '-af equalizer=f=94:width_type=o:width=2:g=30'
        if (/blownmp3/.test(command)) set = '-af acrusher=.1:1:64:0:log'
        if (/deepmp3/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
        if (/earrapemp3/.test(command)) set = '-af volume=12'
        if (/fastmp3/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
        if (/fatmp3/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
        if (/nightcoremp3/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (/reversemp3/.test(command)) set = '-filter_complex "areverse"'
        if (/robotmp3/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (/slowmp3/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
        if (/smoothmp3/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (/tupaimp3|squirrelmp3|chipmunkmp3/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) throw `_*Error!*_`
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, null, { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else throw `Balas vn/audio yang ingin diubah dengan caption *${usedPrefix + command}*`
    } catch (e) {
        throw e
    }
}
handler.help = ['bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai'].map(v => v + ' [vn]')
handler.tags = ['audio']
handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk)$/i

module.exports = handler

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
