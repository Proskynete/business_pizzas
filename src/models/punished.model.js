const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PizzaSchema = Schema(
	{
		punished: { type: String, required: true },
		accuser: { type: String, require: true },
		create_at: { type: String, required: true }
	},
	{
		collection: 'Pizza'
	}
);

module.exports = mongoose.model('Pizza', PizzaSchema);
