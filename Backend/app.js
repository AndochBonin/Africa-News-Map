const express = require('express');
let request = require('request');
const news = require('gnews');
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("MY BACKEND"));
app.listen(port, () => console.log(`My backend listening on port${port}`))


app.get("/gnews", (req, res) => {
    const main = async () => {
        let query = req.query.region;
        const print = item => console.log(item.pubDate + ' | ' + item.title);
        const geo = await news.geo(query, {n : 4});
        //geo.forEach(print);
        console.log(geo[0].title);
        //console.log(geo[2].title)
        res.send([geo[0].title, geo[1].title, geo[2].title, geo[3].title]);
    };
    main();
})

//main();