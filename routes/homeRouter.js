const express = require('express');
const router = express.Router();

// BUKU TAMU
router.get("/", (req, res) => {
	// return res.render("buku_tamu");
	return res.redirect("/home");
});
router.post("/", (req, res) => {
	return res.redirect("/home");
});

// HOME
router.get("/home", (req, res) => {
	return res.render("index", { pageName: "/home" });
});

module.exports = router;