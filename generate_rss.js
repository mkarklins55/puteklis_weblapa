const fs = require("fs");
const builder = require("xmlbuilder");

const items = JSON.parse(fs.readFileSync("jaunumi.json", "utf8"));

const feed = builder.create("rss", { version: "1.0", encoding: "UTF-8" })
  .att("version", "2.0")
  .ele("channel")
    .ele("title", "Putekļa jaunumi").up()
    .ele("link", "https://puteklis.com/jaunumi.html").up()
    .ele("description", "Aktuālie atjauninājumi un notikumi Putekļa lapā").up();

items.forEach(entry => {
  feed.ele("item")
    .ele("title", entry.title).up()
    .ele("description", entry.description).up()
    .ele("pubDate", new Date(entry.date).toUTCString()).up()
    .ele("link", "https://puteklis.com/jaunumi.html").up()
    .ele("guid", `https://puteklis.com/#${entry.date}`).up()
    .up();
});

const xml = feed.end({ pretty: true });
fs.writeFileSync("jaunumi.xml", xml);
