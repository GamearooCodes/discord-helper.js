import { Logger } from "@classycrafter/super-logger";
import discord from 'discord.js';

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
export class HelperUtils {
  
    
    constructor() {
      
    }
    pages(array: [], itemsPerPage: number, page: number): Promise<{array: any, page: string}> {
        
        return new Promise(async (resolve, reject) => {
          const maxPages = Math.ceil(array.length / itemsPerPage);
          if (page < 1 || page > maxPages) return reject("err: page error");
          const array2 = array.slice(
            (page - 1) * itemsPerPage,
            page * itemsPerPage
          );
          const array3: never[] = [];
          array2.map((text) => array3.push(text));
          const data = {
            array: array3,
            page: `${page} / ${maxPages}`,
          };
          resolve(data);
        });
      
      }
      discordsendwebhook(webhookurl: string, context: string, embed?: any) {
        if (!webhookurl)
          return logger.error(
            "A Webhook url for discord and embed is required!", "discord-helper.js"
          );
        try {
          const webhook = new discord.WebhookClient({ url: webhookurl });
          if (!webhook)
            return logger.error(
              "WebhookError: please make sure the webhook url is valid", "discord-helper.js"
            );
    
          if (context !== "" && !context)
            return logger.error(
              'You must provide content as "" or with text ``Note use "" only for embeds if no embeds the content is needed!', "discord-helper.js"
            );
          if (context === "" && !embed)
            return logger.error('a embed is required for "" content', "discord-helper.js");
          if (embed && context) {
            webhook.send({ content: context, embeds: [embed] });
          } else if (embed) {
            webhook.send({ embeds: [embed] });
          } else if (context) {
            webhook.send({ content: context });
          }
        } catch (err) {
          return logger.error(`${err}`, "discord-helper.js");
        }
      }
      
      math(num1: number, num2: number): Promise<{add: number, addround: number, subtract:number, subtractround: number, multiplication: number, multiround: number, division: number, divisionround: number, remainder: number, exponent: number, exponentround: number}> {
        return new Promise(async (resolve, reject) => {
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
        
      }
      async permCheckerAsync(perm: any, member:any, channel:any) {
        const p3 = new Promise(async (resolve, reject) => {
          var hasPerm = true;
          try {
            console.log(member.permissions.has(perm));
            if (!member.permissions.has(perm)) hasPerm = false;
            if (!member.permissionsIn(channel)) hasPerm = false;
          } catch (err) {
            logger.error(`${err}`, "discord-helper.js");
            reject("Error Check Console!");
          }
    
          resolve(hasPerm);
        });
    
        return p3;
      }
}

