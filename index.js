const { WebhookClient } = require("discord.js");
const isPortReachable = require("is-port-reachable");
const { createLogger, format, transports, level } = require("winston");
const { consoleFormat } = require("winston-console-format");
var pjson = require("./package.json");
const logger = createLogger({
	level: "silly",
	format: format.combine(
		format.timestamp(),
		format.ms(),
		format.errors({ stack: true }),
		format.splat(),
		format.json()
	),
	defaultMeta: { service: "Test" },
	transports: [
		new transports.Console({
			format: format.combine(
				format.colorize({ all: true }),
				format.padLevels(),
				consoleFormat({
					showMeta: true,
					metaStrip: ["timestamp", "service"],
					inspectOptions: {
						depth: Infinity,
						colors: true,
						maxArrayLength: Infinity,
						breakLength: 120,
						compact: Infinity,
					},
				})
			),
		}),
	],
});

exports.consoleerror = async function (err) {
	logger.error(err);
};

exports.consolewarn = async function (warn) {
	logger.warn(warn);
};

exports.consoleinfo = async function (info) {
	logger.info(info);
};

exports.consolesilly = async function (silly) {
	logger.silly(silly);
};

exports.discordchannelsend = async function (client, channel, content, embed) {
	let p3 = new Promise(async (resolve, reject) => {
		let channelsend = client.channels.cache.get(channel.id || channel) || null;

		if (!channelsend) reject("Error: Chanel not defined!");

		if (!content)
			reject(
				'You must provide content as "" or with text ``Note use "" only for embeds if no embeds the content is needed!'
			);

		if (content === "" || !embed) reject('a embed is required for "" content');

		if (embed && content) {
			channelsend.send({ content, embeds: [embed] });
			resolve("Completed");
		} else if (embed) {
			channelsend.send({ embeds: [embed] });
			resolve("Completed");
		} else if (content) {
			channelsend.send({ content });
			resolve("Completed");
		}
	});
	return p3;
};

exports.discordsendwebhook = async function (wb, embed) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!wb || !embed)
			return reject("A Webhook url for discord and embed is required!");

		try {
			if (!webhook)
				return reject(
					"Webhook error please make sure the webhook is a discord webhook"
				);

			webhook.send({ embeds: [embed] });

			resolve("Completed!");
		} catch (err) {
			return reject(err);
		}
	});
	return p3;
};

exports.versioninfo = async function () {
	let p3 = new Promise(async (resolve, reject) => {
		let data = {
			discordjs: pjson.dependencies["discord.js"],
			node: process.versions.node,
		};
		resolve(data);
	});
	return p3;
};

exports.checkipport = async function (ip, port) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!ip || !port) return reject("You must provide a ip and a port");

		let is = await isPortReachable(port, { host: ip });

		let data = is;

		resolve(data);
	});
	return p3;
};

exports.javascriptmath = async function (num1, num2) {
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
}; //+ - * /
