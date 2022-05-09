const { WebhookClient, MessageEmbed } = require("discord.js");
const discord = require("discord.js")
const isPortReachable = require("is-port-reachable");
const { Logger } = require("simply-logger");
const { createLogger, format, transports, level } = require("winston");
const { consoleFormat } = require("winston-console-format");
var pjson = require("./package.json");


class Client {
	/**
	 * 
	 * @param {String} name 
	 * @param {discord.Client} client 
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
	 * @returns 
	 */
	clientping() {
		let p3 = new Promise(async (resolve, reject) => {
			if (!this.client) return reject(`Client is required`);
			let embed = new MessageEmbed();
	
			embed.setDescription(`${this.client.ws.ping || 0}ms`);
	
			let text = `${this.client.ws.ping || 0}ms`;
	
			let data = {
				embed: embed,
				text: text,
			};
	
			resolve(data);
		});
		return p3;
	}
	/**
	 * 
	 * @param {Boolean} warn 
	 * @param {Boolean} error 
	 * @param {Boolean} info 
	 * @param {String} text
	 */
	executeconsole(warn, error, info, text) {

		if(warn) this.logs.warn(text);
		if(error) this.logs.error(text);
		if(info) this.logs.info(text);

	}
	/**
	 * 
	 * @param {discord.GuildChannel} channel 
	 * @param {String} context 
	 * @param {discord.MessageEmbed} embed 
	 */
	channelsend(channel, context, embed) {
		let channelsend = this.client.channels.cache.get(channel.id || channel) || null;

		if(!channelsend) return this.logs.error(`Channel ${channel || "NULL"} is not found in any  guild within this provided client!`);

		if(context !== "" && !context) return this.logs.error(`You must provide content as "" or with text ``Note use "" only for embeds if no embeds the content is needed!`);

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
	 * 
	 * @param {String} name 
	 */
	constructor(name) {
	this.logs = new Logger(name, "America/New_York", 12);
	}

	/**
	 * 
	 * @param {Array} array 
	 * @param {Number} itemsPerPage 
	 * @param {Number} page 
	 * @returns data
	 */
	pages(array, itemsPerPage, page = 1) {
		let p3 = new Promise(async (resolve, reject) => {
			let pagedata;
			const maxPages = Math.ceil(array.length / itemsPerPage);
			if (page < 1 || page > maxPages) return reject("err: page error");
			let array2 = array.slice((page - 1) * itemsPerPage, page * itemsPerPage)

			var array3 = [];

			array2.map(text => array3.push(text));
			let data = {
				array: array3,
				page: `${page} / ${maxPages}`,
			};
	
			resolve(data);
		});
		return p3;
	}
	/**
	 * 
	 * @param {discord.Webhook} webhookurl 
	 * @param {discord.MessageEmbed} embed 
	 * @returns 
	 */
	discordsendwebhook(webhookurl, embed) {
		if (!webhookurl || !embed)
			return this.logs.error("A Webhook url for discord and embed is required!");

		try {
			const webhook = new WebhookClient({ url: webhookurl });
			if (!webhook)
				return this.logs.error(
					"Webhook error please make sure the webhook is a discord webhook"
				);

			webhook.send({ embeds: [embed] });

		
		} catch (err) {
			return this.logs.error(err);
		}
	}
	/**
	 * 
	 * @returns 
	 */
	versioninfo() {
		let p3 = new Promise(async (resolve, reject) => {
			let data = {
				discordjs: pjson.dependencies["discord.js"],
				node: process.versions.node,
			};
			resolve(data);
		});
		return p3;
	}
	/**
	 * 
	 * @param {String} ip 
	 * @param {Number} port 
	 * @returns true or false
	 */
	checkipport(ip, port){
		let p3 = new Promise(async (resolve, reject) => {
			if (!ip || !port) return reject("You must provide a ip and a port");
	
			let is = await isPortReachable(port, { host: ip });
	
			let data = is;
	
			resolve(data);
		});
		return p3;
	}
	/**
	 * 
	 * @param {Number} num1 
	 * @param {Number} num2 
	 * @returns data
	 */
	math(num1, num2) {
		let p3 = new Promise(async (resolve, reject) => {
			if (!num1 || !num2) return reject("You need to provide numbers");
			let data = {
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
	
}

module.exports = {
	Client,
	Utils
}