const mongoose = require("mongoose");

let MONGODB_URI = process.env.PROD_MONGODB || process.MONGODB || "mongodb://127.0.0.1:27017/airlines";

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
	console.log("Successfully connected to MongoDB.");
});

const db = mongoose.connection;

module.exports = db;
