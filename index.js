const { createLogger, format, transports, level } = require("winston");
const { consoleFormat } = require("winston-console-format");
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
