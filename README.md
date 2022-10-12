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

We understand JavaScript can be hard especially with discord.js. This package has logs and a send webhook to send discord embeds to a discord webhook! IT EVEN HAS MATH!!!!!!

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

let helperclient = new helper.Client("Bots Name", Client);
let helperutils = new helper.Utils("Name for logs");

// console examples
helperclient.executeconsole("info", "online"); // info
helperclient.executeconsole("error", "online"); // error
helperclient.executeconsole("warn", "online"); // warn

helperclient.ping().then((data) => {
	let { embed, text } = data;

	//code here
});

let arrary = ["1", "2", "3", "4"];

helperutils.pages(arrary, 2, 2).then((data) => {
	console.log(data.array);
	console.log(data.page);
});

helperclient.channelsend(message.channel, "test", embed);
helperclient.channelsend(message.channel, "", embed);
helperclient.channelsend(message.channel, "test");

helperutils.discordsendwebhook(webhookurl, embed);

helperutils.versioninfo().then((data) => {
	let { discordjs, node } = data;
	//code here
});

helperutils.checkipport(ip, port).then((data) => {
	console.log(data); // returns true or false
});

helperutils.math(1, 5).then((data) => {
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
});

helperutils.permCheckerAsync(perm, member).then(data) => {
	console.log(data);
}; //returns true or false
```

## Support

email : support@animedev.top

discord: https://discord.gg/k7yBfqyRwg
