let handler = async (m, { conn, text, usedPrefix, command }) => {
   let [ hari, jam, menit, detik ] = text.split`|`
   if (![ hari, jam, menit, detik ] || isNaN([ hari, jam, menit, detik ])) throw `Masukkan angka mewakili jumlah hari, jam, menit, detik (hari|jam|meniti|detik)!\n*Misal : ${usedPrefix + command} 1|2|3|4*`
    var jumlahHari = 86400000 * hari
    var jumlahJam = 3600000 * jam
    var jumlahMenit = 60000 * menit
    var jumlahDetik = 1000 * detik
    var now = new Date() * 1
    if (now < global.DATABASE.data.chats[m.chat].expired) global.DATABASE.data.chats[m.chat].expired += jumlahHari
    else global.DATABASE.data.chats[m.chat].expired = now + jumlahHari + jumlahJam + JumlahMenit + JumlahDetik
    m.reply(`Berhasil menetapkan hari kadaluarsa untuk ${conn.getName(m.chat)} selama ${text} hari.\n\nHitung Mundur : ${msToDate(global.DATABASE.data.chats[m.chat].expired - now)}`)
}
handler.help = ['expired hari|jam|menit|detik']
handler.tags = ['owner']
handler.command = /^(expired)$/i
handler.owner = true
module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}
