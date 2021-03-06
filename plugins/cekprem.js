let handler = async (m, { conn }) => {
    if (global.DATABASE.data.chats[m.chat].premium - new Date < 1000) {
        conn.reply(m.chat, `Maap, anda adalah premium vip`, m)
    } else conn.reply(m.chat, `Kadarluarsa premium anda berakhir pada ${msToDate(global.DATABASE.data.chats[m.chat].premium - new Date * 1)} lagi`, m)
}
handler.help = ['cekprem','kapanprem','cekprems','kapanprems','cekpremium','kapanpremium']
handler.tags = ['premium']
handler.command = /^(cek|kapan)(prem|prems|premium)$/i
handler.private = true
handler.premium = true
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
