const mysql = require("mysql2");
const config = require("./config");

// Create a connection to the database
const db = mysql.createConnection(config.db);

// open the MySQL connection
db.connect((error) => {
	if (error) throw error;
	console.log("Successfully connected to the database.");
});

module.exports = db;
