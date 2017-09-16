global.Promise = require('bluebird');

const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const files = require('./data_definition');

const client = new Client({ database: 'usda' });

function readFile(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, 'latin1', (error, data) => {
			if (error) {
				reject(error);
				return;
			}

			resolve(data);
		});
	});
};

function createQueryText(file) {
	let fields = file.fields.map(field => field.name).join(', ');
	let values = file.fields.map((field, index) => '$' + (index + 1)).join(', ');

	return `INSERT INTO ${file.table}(${fields}) VALUES(${values})`;
}

function processValue(value, field) {
	let parsedValue = field.source === 'text' ? value.slice(1, value.length - 1) : value;

	if (parsedValue.trim().length === 0) {
		return null;
	}

	switch(field.type) {
		case 'boolean':
			return parsedValue.toLowerCase() === 'y' ? true : false;
		case 'number':
			return Number(parsedValue);
		case 'text':
			return parsedValue;
	}
}

function createQueryValues(line, fields) {
	let values = [];
	for (let [index, value] of line.trim().split('^').entries()) {
		values.push(processValue(value, fields[index]));
	}

	return values;
}

async function main() {
	let queries = [];

	for (let file of files) {
		try {
			let filePath = path.join(__dirname, '..', 'data', file.name);
			let data = await readFile(filePath);
			for (let line of data.trim().split('\n')) {
				let query = {
					text: createQueryText(file),
					values: createQueryValues(line, file.fields)
				};

				queries.push(query);
			}
		} catch (error) {
			console.log(error);
		}
	}

	await client.connect();

	try {
		for (let query of queries) {
			await client.query(query);
		}		
	} catch (error) {
		console.log(error);
	}

	await client.end()
}

main();
