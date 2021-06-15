const Country = require("../models/Countries");
const Airline = require("../models/Airlines");

const createNewCountry = async (req, res) => {
	try {
		const country = await new Country(req.body);
		await country.save();

		return res.status(200).json({
			country,
		});
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const getAllCountries = async (req, res) => {
	try {
		const countries = await Country.find();
		return res.status(200).json({ countries });
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const getCountryByID = async (req, res) => {
	const { id } = req.params;
	try {
		const country = await Country.findById(id);

		if (country) {
			return res.status(200).json(country);
		}

		return res.status(404).send("Country not found");
	} catch (e) {
		return res.status(404).send(`Country not found: ${e.message}`);
	}
};

const deleteCountryByID = async (req, res) => {
	const { id } = req.params;
	try {
		const countryDeleted = await Country.findByIdAndDelete(id);

		if (countryDeleted) {
			return res.status(200).send("Country successfully removed");
		}

		throw new Error("Country not found.");
	} catch (e) {
		return res.status(500).send(e.message);
	}
};

const updateCountryByID = async (req, res) => {
	try {
		const { id } = req.params;

		await Country.findByIdAndUpdate(id, req.body, { new: true }, (err, country) => {
			if (err) {
				res.status(500).send(err);
			}
			if (!country) {
				res.status(404).send("Country not found.");
			}

			return res.status(200).json(country);
		});
	} catch (e) {
		return res.status(500).send(e.message);
	}
};

// AIRLINES START HERE

const createNewAirline = async (req, res) => {
	try {
		const { id } = req.params;

		const countryId = await Airline.find({ country_id: id });

		if (countryId) {
			const newAirline = await new Airline(req.body);
			await newAirline.save();
			return res.status(201).json({
				newAirline,
			});
		}
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const getAirlineByID = async (req, res) => {
	const { id } = req.params;
	try {
		const country = await Airline.findById(id);

		if (country) {
			return res.status(200).json(country);
		}

		return res.status(404).send("AirLine not found");
	} catch (e) {
		return res.status(404).send(`AirLine not found: ${e.message}`);
	}
};

const getAllAirlines = async (req, res) => {
	try {
		const airlines = await Airline.find();
		return res.status(200).json({ airlines });
	} catch (e) {
		res.send(500).json({ error: e.message });
	}
};

const getCountryAirlines = async (req, res) => {
	try {
		const { id } = req.params;
		const allCountryAirlines = await Airline.find({ country_id: id });

		console.log(`Returning this:`, allCountryAirlines);

		return res.status(200).send(allCountryAirlines);
	} catch (e) {
		return res.status(500).send("No countries found.");
	}
};

const deleteAirLineByID = async (req, res) => {
	const { id } = req.params;
	try {
		const airLineDeleted = await Airline.findByIdAndDelete(id);

		if (airLineDeleted) {
			return res.status(200).send("AireLine successfully removed");
		}

		throw new Error("AirLine not found.");
	} catch (e) {
		return res.status(500).send(e.message);
	}
};

const updateAirLineByID = async (req, res) => {
	try {
		const { id } = req.params;

		await Airline.findByIdAndUpdate(id, req.body, { new: true }, (err, airline) => {
			if (err) {
				res.status(500).send(err);
			}
			if (!airline) {
				res.status(404).send("Country not found.");
			}

			return res.status(200).json(airline);
		});
	} catch (e) {
		return res.status(500).send(e.message);
	}
};

module.exports = {
	createNewCountry,
	getAllCountries,
	getCountryByID,
	deleteCountryByID,
	updateCountryByID,
	createNewAirline,
	getAllAirlines,
	getCountryAirlines,
	updateAirLineByID,
	deleteAirLineByID,
	getAirlineByID,
};
