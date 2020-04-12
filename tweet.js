"use strict";

const Twit = require("twit");
const TwitterBot = require("node-twitterbot").TwitterBot;
const fetch = require("node-fetch");

require("dotenv").config();

const Bot = new TwitterBot({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

fetch(`https://browsersverige.se/data/browsers.json`)
  .then((res) => res.json())
  .then((json) => {
    const list = json
      .slice(0, 10)
      .map(
        (browser) =>
          `${browser["Browser Version"]} - ${
            Object.values(browser["Market Share Perc"])[0]
          }%`
      )
      .join("\n");
    Bot.tweet(`Topp 10: \n\n${list}\n\nhttps://browsersverige.se`);
  });
