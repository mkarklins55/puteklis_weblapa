// read_latest_rss.js
const fs = require("fs");
const xml2js = require("xml2js");

const rss = fs.readFileSync("jaunumi.xml", "utf-8");

xml2js.parseString(rss, (err, result) => {
  if (err) throw err;

  const item = result.rss.channel[0].item[0];
  const title = item.title[0];
  const link  = item.guid[0];

  console.log(`::set-output name=title::${title}`);
  console.log(`::set-output name=link::${link}`);
  console.log(`::set-output name=guid::${link}`);
});
