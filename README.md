<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="https://gamearoo.top/ram/d-h.js.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/tUpsrAmkqp"><img src="https://img.shields.io/discord/1068088656377692170?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
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

## Example

```javascript
// these are just examples please provide the actual info
import * as discordHelper from "discord-helper.js"; // typescript

let guildid = "Guild Id Here";

const discordHelper = require("discord-helper.js"); // javascript

new discordHelper.HelperClient(client).GlobalcommandRegisterAsync({
  name: "hello",
  description: "command",
  options: [],
  type: "Optinal",
  permission: "Administrator",
});

new discordHelper.HelperClient(client).GuildcommandRegisterAsync(guildid, {
  name: "hello",
  description: "command",
  options: [],
  type: "Optinal",
  permission: "Administrator",
});

new discordHelper.HelperClient(client)
  .clientPing()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {});

new discordHelper.HelperClient(client).threadCreateAsync(
  "name",
  channel,
  message,
  guild
);

new discordHelper.HelperClient(client).channelsend(channel, "", embed);

new discordHelper.HelperUtils()
  .math(1, 2)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {});

new discordHelper.HelperUtils()
  .pages(array, 1, 1)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {});

new discordHelper.HelperUtils()
  .permCheckerAsync(perm, member, channel)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {});

new discordHelper.HelperUtils().discordsendwebhook(webhookURL, "", embed);
```

## Support

email : support@gamearoo.dev

discord: https://discord.gg/tUpsrAmkqp
