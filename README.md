<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="https://gamearoo.top/ram/d-h.js.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.com/invite/a3vBXUJadY"><img src="https://img.shields.io/discord/605900262581993472?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/discord-helper.js"><img src="https://img.shields.io/npm/v/discord-helper.js.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/discord-helper.js"><img src="https://img.shields.io/npm/dt/discord-helper.js.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/Gamearoos-development/discord-helper.js/actions"><img src="https://github.com/Gamearoos-development/discord-helper.js/actions/workflows/text.yml/badge.svg" alt="Tests status" /></a>
  </p>
  <a href="https://nodei.co/npm/discord-helper.js/"><img src="https://nodei.co/npm/discord-helper.js.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

## About this package

We understand js can be hard especially with discord.js this package has logs and a send webhook to send discord embeds to a discord webhook! IT EVEN HAS MATH!!!!!!

## Install

`npm i discord-helper.js` or `yarn add discord-helper.js`

### Example

```javascript
const helper = require("discord-helper.js");

let num1 = 1;
let num2 = 5;
let webhookurl = "webhook url here";
let embed = {
  color: 0x0099ff,
  title: "Some title",
  url: "https://discord.js.org",
  author: {
    name: "Some name",
    icon_url: "https://i.imgur.com/AfFp7pu.png",
    url: "https://discord.js.org",
  },
  description: "Some description here",
  thumbnail: {
    url: "https://i.imgur.com/AfFp7pu.png",
  },
  fields: [
    {
      name: "Regular field title",
      value: "Some value here",
    },
    {
      name: "\u200b",
      value: "\u200b",
      inline: false,
    },
    {
      name: "Inline field title",
      value: "Some value here",
      inline: true,
    },
    {
      name: "Inline field title",
      value: "Some value here",
      inline: true,
    },
    {
      name: "Inline field title",
      value: "Some value here",
      inline: true,
    },
  ],
  image: {
    url: "https://i.imgur.com/AfFp7pu.png",
  },
  timestamp: new Date(),
  footer: {
    text: "Some footer text here",
    icon_url: "https://i.imgur.com/AfFp7pu.png",
  },
};

let ip = "ip";
let port = "port";

// console examples
helper.consoleerror("test error");

helper.consoleinfo("test info");
helper.consolewarn("test warn");
helper.consolesilly("test silly");

// end of console examples

//webhook send example
helper
  .discordsendwebhook(webhookurl, embed)
  .then((data) => helper.consoleinfo(data))
  .catch((err) => helper.consoleerror(err));
//end of webhook send example
//version info example
helper.versioninfo().then((data) => {
  let { discordjs, node } = data;
  console.log(discordjs);
  console.log(node);
});
//end of version info example
//check a ip and port example
helper
  .checkipport(ip, port)
  .then((data) => console.log(`Isup: ${data}`))
  .catch((err) => console.log(err));
//end of check a ip and port example

//channel send example

helper
  .discordchannelsend(client, message.channel, "Hi", embed) //(client, channel, content, embed)  embed is optional when content has text also content can be "" when theres a embed
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
//end of channel send example
//math example
helper
  .javascriptmath(num1, num2)
  .then((data) => {
    let {
      add,
      addround,
      subtract,
      subtractround,
      multiplication,
      multiround,
      division,
      divisionround,
      remainder,
      exponent,
      exponentround,
    } = data;

    console.log(add); //not rounded
    console.log(addround); // rounded
    console.log(subtract); // not rounded
    console.log(subtractround); // rounded
    console.log(multiplication); // not rounded
    console.log(multiround); // rounded
    console.log(division); // not rounded
    console.log(divisionround); // rounded
    console.log(remainder);
    console.log(exponent); //not rounded
    console.log(exponentround); // rounded
  })
  .catch((err) => consoleerror(err));
//end of math example
//pages example
let array = ["Hi", "hi2", "h3", "h4"];
let maxitemperpage = 2;
let page = args[1] || 1;

let newarray;
let pagen;

await pages(array, maxitemperpage, page)
  .then((data) => {
    newarray = data.array;
    pagen = data.page;
  })
  .catch((err) => console.log(err));

embed.description = `${newarray.map((m) => m).join(", ")} \n\n ${pagen}`;

discordchannelsend(client, message.channel, "", embed).catch((err) =>
  console.log(err)
);

//end of pages example
//client ping example
clientping(client).then((data) => {
  embed = data.embed;
  discordchannelsend(client, message.channel.id, data.text, embed).catch(
    (err) => {
      consoleerror(err);
    }
  );
});
//end of client ping example
```

## Support

email : support@gamearoodev.com

discord: https://discord.gamearoodev.com

## Sugestion

discord: https://discord.gamearoodev.com => discord-helper.js => suggestions
