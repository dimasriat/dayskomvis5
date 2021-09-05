const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const config = require("./config");
const db = require("./db");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("", express.static(path.join(__dirname, "public")));
app.use(sessions(config.session));
app.use(cookieParser());

app.use((req, res, next) => {
	const date = new Date();
	const date_now = `${date.toISOString().split("T")[0]} ${
		date.toTimeString().split(" ")[0]
	}`; 
	if (req.originalUrl === "/buku-tamu" && req.method === "POST") {
		req.session.buku_tamu = date_now;
		db.query("insert into buku_tamu (nama, asal, timestamp) values (?, ?, ?)", [
			req.body.nama,
			req.body.asal,
			date_now,
		]);
		res.redirect(req.body.next_url);
	} else {
		if (req.session.buku_tamu) {
			req.session.buku_tamu = date_now;
			next();
		} else {
			res.render("buku_tamu", { next_url: req.originalUrl });
		}
	}
});

app.use("/", require("./routes/homeRouter"));
app.use("/tentang", require("./routes/tentangRouter"));
app.use("/pra-event", require("./routes/praEventRouter"));
app.use("/lomba", require("./routes/lombaRouter"));

app.get("/pug", (req, res) => res.send(req.originalUrl));

app.get("*", (req, res) => {
	return res.render("maintenance");
});
app.listen(3000, () => console.log("app started at port 3000"));
