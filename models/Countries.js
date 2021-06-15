const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Countries = new Schema(
	{
		nation: { type: String, require: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("countries", Countries);
