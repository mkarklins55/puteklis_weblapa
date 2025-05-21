// read_latest_rss.js
const fs     = require("fs");
const xml2js = require("xml2js");

(async () => {
  try {
    // 1) nolasām XML
    const xml = fs.readFileSync("jaunumi.xml", "utf-8");

    // 2) parsējam uz JS objektu (promise versija)
    const rss = await xml2js.parseStringPromise(xml, { explicitArray: true });

    // 3) <item> masīvs
    const items = rss?.rss?.channel?.[0]?.item ?? [];
    if (items.length === 0) throw new Error("RSS fails nesatur <item>.");

    // 4) pēdējais = jaunākais
    const item = items[items.length - 1];

    // 5) virsraksts
    const title = item.title?.[0] ?? "Bez nosaukuma";

    // 6) GUID / link (var būt objekts, ja ir atribūti)
    let link = item.guid?.[0]?._ ?? item.guid?.[0] ?? "";

    // 7) normalizējam URL
    if (link.startsWith("#")) {
      // tikai fragments → pievieno jaunumi.html
      link = `https://puteklis.com/jaunumi.html${link}`;
    } else if (/^https?:\/\/puteklis\.com\/#/i.test(link)) {
      // saknes URL → aizvieto ar jaunumi.html
      link = link.replace("puteklis.com/#", "puteklis.com/jaunumi.html#");
    } else if (!/^https?:\/\//i.test(link)) {
      // vispār nav URL, tikai 'YYYY-MM-DD'
      link = `https://puteklis.com/jaunumi.html#${link}`;
    }

    // 8) izvadām uz GITHUB_OUTPUT (ja skrien Actions)
    const out = process.env.GITHUB_OUTPUT;
    if (out) {
      fs.appendFileSync(out, `title=${title}\n`);
      fs.appendFileSync(out, `link=${link}\n`);
      fs.appendFileSync(out, `guid=${link}\n`);
    } else {
      // lokāli testam
      console.log(title, link);
    }

    console.log("✅ RSS jaunākais:", title, link);
  } catch (e) {
    console.error("🚫 read_latest_rss.js kļūda:", e.message);
    process.exit(1);
  }
})();
