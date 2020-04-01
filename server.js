const mongoose = require('mongoose');
const app = require('./src/config/app.js');
const config = require('./src/config/config.js');

mongoose
	.connect(config.db, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	.then(() => {
		console.log('Connected with mongodb...');

		app.listen(config.port, () => {
			console.log(`Api running on port: ${config.port}`);
		});
	})
	.catch(err => {
		return console.log(`${err}`);
	});
