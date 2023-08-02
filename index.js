const discord = require("discord.js");
const isPortReachable = require("is-port-reachable");
const { Logger } = require("simply-logger");
const { cli } = require("winston/lib/winston/config");

const mylogger = new Logger("discord-helper.js", "America/New_York", 12);

class Client {
  /**
   *
   * @param {String} name The name of the logger
   * @param {discord.Client} client The client to use (must be Discord.JS Client)
   */
  constructor(name, client) {
    /**
     * this.client is the discords client
     */
    this.client = client;
    /**
     * Client logger
     */
    this.logs = new Logger(name, "America/New_York", 12);
  }

  /**
   *
   * @param {{name, options, description, permission, type}} _otions
   */
  async GlobalcommandRegiter(_otions) {
    let name = _otions.name;
    let options = _otions.options;
    let description = _otions.description;
    let permission = _otions.permission;
    let commands = this.client.application.commands;
    if (_otions.type) {
      commands?.create({
        name,
        description,
        options,
        type,
        default_member_permissions: permission,
      });
      mylogger.info(`Registered ${name} to the bots command list`);
    } else {
      commands?.create({
        name,
        description,
        options,
        default_member_permissions: permission,
      });

      mylogger.info(`Registered ${name} to the bots command list`);
    }
  }
  /**
   *
   * @param {String} threadName
   * @param {discord.Channel} channel
   * @param {discord.Message} message
   * @param {discord.Guild} guild
   * @returns
   */
  async threadCreateAsync(threadName, channel, message, guild) {
    if (!guild) return;

    if (!channel)
      return console.error(`Channel ID provided not found in ${guild.id}`);

    if (channel.type !== discord.ChannelType.GuildText)
      return console.log("The channel selected is not a text channel");

    if (!message) return console.log("Message Failed to be fetched");

    let thread = await messages.startThread({
      name: threadName,
      reason: "Requested by a bot using discord-helper.js",
    });

    if (!thread)
      return console.log("Error thread never got made ether perm or other");

    await thread.send(
      "This thread was made using the package discord-helper.js"
    );
  }
  /**
   *
   * @returns
   */
  clientpingAync() {
    const p3 = new Promise(async (resolve, reject) => {
      if (!this.client) return reject(`Client is required`);
      const embed = new discord.MessageEmbed().setDescription(
        `${this.client.ws.ping || 0}ms`
      );

      const text = `${this.client.ws.ping || 0}ms`;
      const data = {
        embed: embed,
        text: text,
      };
      resolve(data);
    });
    return p3;
  }

  /**
   *
   * @param {('error'|'warn'|'info')} type
   * @param {String} text
   */
  executeconsole(type, text) {
    this.logs[type](text);
  }
  /**
   * Sends a message to a channel
   * @param {discord.TextChannel|discord.ThreadChannel|discord.Snowflake} channel The channel to send the message to
   * @param {String} context The content of the message
   * @param {discord.MessageEmbed} embed The embed to send (optionnal)
   */
  channelsend(channel, context, embed) {
    const channelsend =
      this.client.channels.cache.get(channel.id || channel) || null;

    if (!channelsend)
      return this.logs.error(
        `Channel ${
          channel || "NULL"
        } is not found in any  guild within this provided client!`
      );
    if (context !== "" && !context)
      return this.logs.error(
        `You must provide content as "" or with text ``Note use "" only for embeds if no embeds the content is needed!`
      );
    if (context === "" && !embed)
      return this.logs.error('a embed is required for "" content');
    if (embed && context) {
      channelsend.send({ content: context, embeds: [embed] });
    } else if (embed) {
      channelsend.send({ embeds: [embed] });
    } else if (context) {
      channelsend.send({ content: context });
    }
  }
}

class Utils {
  /**
   * Util class
   * @param {String} name The name of the logger
   */
  constructor(name) {
    this.logs = new Logger(name, "America/New_York", 12);
  }

  /**
   *
   * @param {Array} array
   * @param {Number} itemsPerPage
   * @param {Number} page
   * @returns {data}
   */
  pagesAsync(array, itemsPerPage, page = 1) {
    const p3 = new Promise(async (resolve, reject) => {
      const maxPages = Math.ceil(array.length / itemsPerPage);
      if (page < 1 || page > maxPages) return reject("err: page error");
      const array2 = array.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
      );
      const array3 = [];
      array2.map((text) => array3.push(text));
      const data = {
        array: array3,
        page: `${page} / ${maxPages}`,
      };
      resolve(data);
    });
    return p3;
  }

  /**
   * Sends a message to a channel
   * @param {discord.TextChannel|discord.ThreadChannel|discord.Snowflake} channel The channel to send the message to
   * @param {String} context The content of the message
   * @param {discord.MessageEmbed} embed The embed to send (optionnal)
   */
  discordsendwebhookAsync(webhookurl, context, embed) {
    if (!webhookurl)
      return this.logs.error(
        "A Webhook url for discord and embed is required!"
      );
    try {
      const webhook = new discord.WebhookClient({ url: webhookurl });
      if (!webhook)
        return this.logs.error(
          "WebhookError: please make sure the webhook url is valid"
        );

      if (context !== "" && !context)
        return this.logs.error(
          `You must provide content as "" or with text ``Note use "" only for embeds if no embeds the content is needed!`
        );
      if (context === "" && !embed)
        return this.logs.error('a embed is required for "" content');
      if (embed && context) {
        webhook.send({ content: context, embeds: [embed] });
      } else if (embed) {
        webhook.send({ embeds: [embed] });
      } else if (context) {
        webhook.send({ content: context });
      }
    } catch (err) {
      return this.logs.error(err);
    }
  }
  /**
   * Checks versions of Discord.JS and the NodeJS version
   * @returns
   */
  versioninfoAsync() {
    const p3 = new Promise(async (resolve, reject) => {
      const data = {
        discordjs: discord.version,
        node: process.versions.node,
      };
      resolve(data);
    });
    return p3;
  }
  /**
   * Checks if a port is reachable
   * @param {String} ip The IP address to check
   * @param {Number} port The port to check
   * @returns {Boolean} True or False
   */
  checkipportAsync(ip, port) {
    const p3 = new Promise(async (resolve, reject) => {
      if (!ip || !port) return reject("You must provide a IP and a port");
      const data = await isPortReachable(port, { host: ip });
      resolve(data);
    });
    return p3;
  }
  /**
   *
   * @param {Number} num1 The first number to calculate
   * @param {Number} num2 The second number to calculate
   * @returns data
   */
  math(num1, num2) {
    const p3 = new Promise(async (resolve, reject) => {
      if (!num1 || !num2) return reject("You need to provide numbers");
      const data = {
        add: num1 + num2,
        addround: Math.round(num1 + num2),
        subtract: num1 - num2,
        subtractround: Math.round(num1 - num2),
        multiplication: num1 * num2,
        multiround: Math.round(num1 * num2),
        division: num1 / num2,
        divisionround: Math.round(num1 / num2),
        remainder: num1 % num2,
        exponent: num1 ** num2,
        exponentround: Math.round(num1 ** num2),
      };
      return resolve(data);
    });
    return p3;
  }
  /**
   *
   * @param {*} perm
   * @param {discord.GuildMember} member
   * @param {discord.ChannelManager} channel
   */
  async permCheckerAsync(perm, member, channel) {
    const p3 = new Promise(async (resolve, reject) => {
      var hasPerm = true;
      try {
        console.log(member.permissions.has(perm));
        if (!member.permissions.has(perm)) hasPerm = false;
        if (!member.permissionsIn(channel)) hasPerm = false;
      } catch (err) {
        mylogger.error(err);
        reject("Error Check Console!");
      }

      resolve(hasPerm);
    });

    return p3;
  }
}

module.exports = {
  Client,
  Utils,
};
