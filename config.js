const env = process.env;

function to_ms(x, what) {
	if (what === "detik") {
		return 1000 * x;
	} else if (what === "menit") {
		return 1000 * 60 * x;
	} else if (what === "jam") {
		return 1000 * 60 * 60 * x;
	} else {
		return 1000 * x;
	}
}

const config = {
	db: {
		/* don't expose password or any sensitive info, done only for demo */
		host: env.DB_HOST || "localhost",
		user: env.DB_USER || "root",
		password: env.DB_PASSWORD || "",
		database: env.DB_NAME || "dayskomvis5",
	},
	session: {
		secret: "komvisday5",
		saveUninitialized: true,
		cookie: { maxAge: to_ms(1, "jam") }, // 1 jam
		resave: false,
	},
};

module.exports = config;
