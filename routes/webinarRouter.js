const express = require("express");
const router = express.Router();

// WEBINAR
router.get("/", (req, res) => {
	return res.render("webinar", { pageName: "/webinar" });
});

router.get("/1", (req, res) => {
	return res.render("webinar_1", { pageName: "/webinar" });
});

router.get("/2", (req, res) => {
	return res.render("webinar_2", { pageName: "/webinar" });
});

module.exports = router;
