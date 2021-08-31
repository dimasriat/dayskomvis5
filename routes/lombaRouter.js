const express = require("express");
const router = express.Router();

// LOMBA
router.get("/", (req, res) => {
	return res.render("lomba", { pageName: "/lomba" });
});
router.get("/poster", (req, res) => {
	return res.render("lomba_poster", { pageName: "/lomba" });
});
router.get("/fotografi", (req, res) => {
	return res.render("lomba_fotografi", { pageName: "/lomba" });
});

module.exports = router;
