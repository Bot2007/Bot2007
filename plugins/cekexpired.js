let handler = async m =>
Ok = `Maap, owner belum menetapkan expired untuk grup ini`.trim()
if (global.DATABASE.data.chats[m.chat].expired = 0) throw Ok
m.reply(`Expired pada ${msToDate(global.DATABASE.data.chats[m.chat].expired - new Date * 1)}`.trim())
handler.help = ['cekluput','cekexpired','kapanexpired','kapanluput']
handler.tags = ['main']
handler.command = /^(cekluput|cekexpired|kapanexpired|kapanluput)$/i

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
