// read_latest_rss.js
const fs   = require("fs");
const xml2js = require("xml2js");

const xml = fs.readFileSync("jaunumi.xml", "utf-8");

xml2js.parseString(xml, (err, res) => {
  if (err) throw err;

  const items = res.rss.channel[0].item;
  const item  = items[items.length - 1];          // ← pēdējais = jaunākais

  const title = item.title[0];
  let   link  = item.guid[0];                     // tavs GUID (#2025-05-21)

  // Ja GUID nav absolūts URL — izveidojam pilnu
  if (!/^https?:\/\//i.test(link)) {
    if (!link.startsWith("#")) link = `#${link}`;
    link = `https://puteklis.com/jaunumi.html${link}`;
  }

  const guid = link;                              // GUID = pilnais links

  // Izmanto jaunāko GitHub sintaksi — raksti uz failu, kura ceļš ir GITHUB_OUTPUT
  const outPath = process.env.GITHUB_OUTPUT;
  fs.appendFileSync(outPath, `title=${title}\n`);
  fs.appendFileSync(outPath, `link=${link}\n`);
  fs.appendFileSync(outPath, `guid=${guid}\n`);
});
