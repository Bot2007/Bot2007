let handler = async (m, { conn }) => {
    if (global.DATABASE.data.chats[m.chat].expired - new Date < 1000) {
        conn.reply(m.chat, `Maap, owner belum menetapkan kadarluarsa untuk grup ini`, m)
    } else conn.reply(m.chat, `Kadarluarsa pada ${msToDate(global.DATABASE.data.chats[m.chat].expired - new Date * 1)}`, m)
}
handler.help = ['cekkadarluarsa','cekexpired','kapanexpired','kapankadarluasa']
handler.tags = ['group']
handler.command = /^(cek|kapan)(kadarluarsa|expired)$/i
handler.group = true
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
  return days + " hari " + hours + " jam " + minutes + " menit " + sec + " detik";
  // +minutes+":"+sec;
}
