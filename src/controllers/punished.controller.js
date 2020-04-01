const Punished = require('../models/punished.model');

const listPunished = [
	'eduardo',
	'cristian',
	'franco',
	'ignacio',
	'joaquin',
	'matias'
];

const getAllPunished = (_, res) => {
	const response = {
		eduardo: 0,
		cristian: 0,
		franco: 0,
		ignacio: 0,
		joaquin: 0,
		matias: 0
	};
	Punished.find({}).exec((err, punished) => {
		if (err)
			res.status(500).json({
				status: 500,
				error: `${err}`,
				message: `Server Error`
			});

		if (!punished)
			res.status(404).json({
				status: 404,
				error: `${err}`,
				message: `Punished data not found`
			});

		for (let i = 0; i < punished.length; i++) {
			for (let j = 0; j < listPunished.length; j++) {
				if (listPunished[j].includes(punished[i].punished)) {
					response[listPunished[j]] += 1;
				}
			}
		}

		res.status(200).json({
			status: 200,
			punished: response
		});
	});
};

const insertNewPunished = (req, res) => {
	const response = {
		eduardo: 0,
		cristian: 0,
		franco: 0,
		ignacio: 0,
		joaquin: 0,
		matias: 0
	};
	let punishedObject = new Punished({
		punished: req.body.punished,
		accuser: req.body.accuser,
		create_at: Date.now()
	});

	punishedObject.save((err, newPunished) => {
		if (err)
			res.status(500).json({
				status: 500,
				error: `${err}`,
				message: `Server Error`
			});

		if (newPunished) {
			Punished.find({}).exec((err, punished) => {
				if (err)
					res.status(500).json({
						status: 500,
						error: `${err}`,
						message: `Server Error`
					});

				for (let i = 0; i < punished.length; i++) {
					for (let j = 0; j < listPunished.length; j++) {
						if (listPunished[j].includes(punished[i].punished)) {
							response[listPunished[j]] += 1;
						}
					}
				}

				res.status(200).json({
					status: 200,
					punished: response
				});
			});
		}
	});
};

module.exports = {
	getAllPunished,
	insertNewPunished
};
