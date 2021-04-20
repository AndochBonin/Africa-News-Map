const express = require('express');
let request = require('request');
const news = require('gnews');
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("MY BACKEND"));
app.listen(port, () => console.log(`My backend listening on port${port}`))


app.get("/gnews", (req, res) => {
    const main = async () => {
        const geo = await news.geo(req.query.region, {n : 5});
        res.send(geo[0].title + " | " + geo[0].link);
    };
    main();
})

//main();