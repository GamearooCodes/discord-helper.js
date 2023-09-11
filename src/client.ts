import { Logger } from "@classycrafter/super-logger";
import discord from "discord.js";

const logger = new Logger({
    name: "Gamearoo's Development",
    timezone: "America/New_York",
    tzformat: 12,
    writelogs: false,
    colored: true,
    colors: {
        grey: '#bbbbbb',
        gray: '#4C4C4C',
        blue: '#48ACF8',
        loggernamecolor: '#4CBAFF',
        processcolor: '#4C70FF',
        info: {
            color: '#59E77D',
            dark: '#11cc37',
            background: '#D2EED9',
            highlight: false,
        },
        debug: {
            color: '#68E3DF',
            dark: '#13aba4',
            background: '#D5F5F4',
            highlight: false,
        },
        warn: {
            color: '#F2D349',
            dark: '#c9a81b',
            background: '#FAEFBB',
            highlight: false,
        },
        error: {
            color: '#F6545C',
            dark: '#dc222c',
            background: '#FACBCD',
            highlight: false,
        },
        fatal   : {
            color: '#F71111',
            dark: '#9b0000',
            background: '#FAACAC',
            highlight: true,
        }
    }
});

export class HelperClient {
    private client;
    constructor(client: any) {
        this.client = client;

    }
    async GlobalcommandRegisterAsync(_options: {name: string, options?: [], description: string, permission?: any, type?: any}) {
        let name = _options.name;
    let options = _options.options;
    let description = _options.description;
    let permission = _options.permission;
    let commands = this.client.application?.commands;
        
    if (_options.type) {
        commands?.create({
          name,
          description,
          options,
          type: _options.type, // Corrected variable name for 'type'
          default_member_permissions: permission,
        });

        return logger.info(`Registered ${name} to the bot's commands`, "discord-helper.js");

    }
    commands?.create({
        name,
        description,
        options,
        default_member_permissions: permission,
      });
    return logger.info(`Registered ${name} to the bot's commands`, "discord-helper.js");
}
async threadCreateAsync(threadName: string, channel: discord.Channel, message: discord.Message, guild: discord.Guild) {
    if (!guild) return;

    if (!channel)
      return logger.error(`Channel ID provided not found in ${guild.id}`, "discord-helper.js");

    if (channel.type !== discord.ChannelType.GuildText)
      return logger.error("The channel selected is not a text channel", "discord-helper.js");

    if (!message) return logger.error("Message Failed to be fetched", "discord-helper.js");

    let thread = await message.startThread({
      name: threadName,
      reason: "Requested by a bot using discord-helper.js",
    });

    if (!thread)
      return logger.error("Error thread never got made ether perm or other", "discord-helper.js");

    await thread.send(
      "This thread was made using the package discord-helper.js"
    );
  }
  clientPing(): Promise<{embed: {}, text: string}> {
    return new Promise(async (resolve, reject) => {
      if (!this.client) return reject(`Client is required`);
      const embed = new discord.EmbedBuilder().setDescription(
        `${this.client.ws.ping || 0}ms`
      );

      const text = `${this.client.ws.ping || 0}ms`;
      const data = {
        embed: embed,
        text: text,
      };
      resolve(data);
    });
   
  }
  channelsend(channel: any, context: string, embed?: any) {
    const channelsend =
      this.client.channels.cache.get(channel.id || channel) || null;

    if (!channelsend)
      return logger.error(
        `Channel ${
          channel || "NULL"
        } is not found in any  guild within this provided client!`, "discord-helper.js"
      );
    if (context !== "" && !context)
      { 
        logger.error("You must provide content as \"\" or with text ``Note use \"\" only for embeds if no embeds the content is needed!", "discord-helper.js");
      return;
      }
    if (context === "" && !embed)
      return logger.error('a embed is required for "" content', "discord-helper.js");
    if (embed && context) {
      channelsend.send({ content: context, embeds: [embed] });
    } else if (embed) {
      channelsend.send({ embeds: [embed] });
    } else if (context) {
      channelsend.send({ content: context });
    }
  }
  
}