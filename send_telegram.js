// send_telegram.js  (Node ≥16)
const https = require("https");

// -- Vidi no GitHub Secrets --
const token  = process.env.BOT_TOKEN.trim();   // 123456:ABC...
const chatId = process.env.CHAT_ID.trim();     // @PuteklisNews  VAI  -1001234567890

// -- Argumenti no GitHub Action --
const [ , , title = "No title", link = "" ] = process.argv;

// Ziņas saturs (HTML):
const text = `<b>${title}</b>\n<a href="${link}">Lasīt vairāk</a>`;

// Query string ar drošu enkodēšanu
const params = new URLSearchParams({
  chat_id:  chatId,          // URLSearchParams pats enkodēs @ -> %40
  text:     text,
  parse_mode: "HTML"
}).toString();

const options = {
  host: "api.telegram.org",
  path: `/bot${token}/sendMessage?${params}`,
  method: "GET"
};

https.get(options, res => {
  let body = "";
  res.on("data", chunk => body += chunk);
  res.on("end", () => {
    if (res.statusCode === 200) {
      console.log("✅ Telegram OK");
    } else {
      console.error("🚫 Telegram API error", res.statusCode, body);
      process.exit(1);
    }
  });
}).on("error", err => {
  console.error("🚫 HTTPS error:", err);
  process.exit(1);
});
