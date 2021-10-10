const PORT = 4000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

//passing throught the url
const url =
  "https://chapter247infotech.medium.com/react-18-reactjs-latest-version-to-bring-lots-of-new-features-e643e5b3b343";
  
//web scrapper
axios(url).then((response) => {
  const target = response.data;
  const $ = cheerio.load(target);
  const metasTags = [];

  $("meta", target).each(function () {
    const title = $(this).text();
    const meta = $(this).find("meta");
    metasTags.push({
      title,
      meta,
    });
  });
console.log(metasTags)
}).catch(err => console.log('err'));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
