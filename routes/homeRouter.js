const e = require("express");
const express = require("express");
const db = require("../db");
const router = express.Router();

// BUKU TAMU
router.get("/", (req, res) => {
	// if (req.session.buku_tamu) {
		return res.redirect("/home");
	// } else {
	// 	return res.render("buku_tamu");
	// }
});
// router.post("/", (req, res) => {
// 	const date = new Date();
// 	const date_now = `${date.toISOString().split("T")[0]} ${
// 		date.toTimeString().split(" ")[0]
// 	}`;
// 	db.query("insert into buku_tamu (nama, asal, timestamp) values (?, ?, ?)", [
// 		req.body.nama,
// 		req.body.asal,
// 		date_now,
// 	]);
// 	req.session.buku_tamu = true;
// 	return res.redirect("/home");
// });

// HOME
router.get("/home", (req, res) => {
	return res.render("index", { pageName: "/home" });
});

module.exports = router;
