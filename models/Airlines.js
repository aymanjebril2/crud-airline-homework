const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Airlines = new Schema(
	{
		company: { type: String, required: true },
		country_id: { type: Schema.Types.ObjectId, ref: "countries" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("airlines", Airlines);
