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
	
}

module.exports = {
	Client,
	Utils
}