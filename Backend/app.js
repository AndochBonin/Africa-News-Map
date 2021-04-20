const express = require('express');
let request = require('request');
const news = require('gnews');
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("MY BACKEND"));
app.listen(port, () => console.log(`My backend listening on port${port}`))

const main = async () => {
    const print = item => console.log(item.pubDate + ' | ' + item.title);
    console.log('Geo');
    const geo = await news.geo('Ghana', {n : 5});
    geo.forEach(print);
};

main();