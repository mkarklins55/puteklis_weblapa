// read_latest_rss.js
const fs     = require("fs");
const xml2js = require("xml2js");

(async () => {
  try {
    // 1. Nolasām XML failu
    const xml = fs.readFileSync("jaunumi.xml", "utf-8");

    // 2. Parsējam ar Promise-versiju
    const rss = await xml2js.parseStringPromise(xml, { explicitArray: true });

    // 3. Atrodam <item> masīvu
    const items = rss?.rss?.channel?.[0]?.item ?? [];
    if (items.length === 0) {
      throw new Error("❌ RSS fails nesatur <item> ierakstus.");
    }

    // 4. Jaunākais = pēdējais
    const item = items[items.length - 1];

    // 5. Izvelkam virsrakstu
    const title = item.title?.[0] ?? "Bez nosaukuma";

    // 6. Izvelkam GUID/linku — dažreiz xml2js ieliek ._ ja ir atribūti
    let link = item.guid?.[0]?._ ?? item.guid?.[0] ?? "";

    // 7. Ja nav pilns URL, uzbūvējam
    if (!/^https?:\/\//i.test(link)) {
      if (!link.startsWith("#")) link = `#${link}`;
      link = `https://puteklis.com/jaunumi.html${link}`;
    }

    // 8. Izvadām uz GitHub Actions izejas failu
    const out = process.env.GITHUB_OUTPUT;
    if (out) {
      fs.appendFileSync(out, `title=${title}\n`);
      fs.appendFileSync(out, `link=${link}\n`);
      fs.appendFileSync(out, `guid=${link}\n`);
    } else {
      // Lokālai testēšanai – vecais set-output (var ignorēt brīdinājumu)
      console.log(`::set-output name=title::${title}`);
      console.log(`::set-output name=link::${link}`);
      console.log(`::set-output name=guid::${link}`);
    }

    console.log("✅ RSS ieraksts nolasīts:", title, link);
  } catch (err) {
    console.error("🚫 read_latest_rss.js kļūda:", err.message);
    process.exit(1);
  }
})();
