// send_telegram.js – nosūta vienu ziņu (HTML formatā) uz Telegram
const https = require("https");

const token  = process.env.BOT_TOKEN;   // no GitHub Secret
const chatId = process.env.CHAT_ID;     // no GitHub Secret

// Komandrindā: node send_telegram.js "Virsraksts" "https://..."
const [ , , title, link ] = process.argv;

const text = `<b>${title}</b>\n<a href="${link}">Lasīt vairāk</a>`;

const url  = `/bot${token}/sendMessage`
           + `?chat_id=${encodeURIComponent(chatId)}`
           + `&text=${encodeURIComponent(text)}`
           + `&parse_mode=HTML`;

https.get({ host: "api.telegram.org", path: url }, res => {
  res.statusCode === 200
    ? console.log("Telegram OK")
    : console.error("Telegram error", res.statusCode);
});
