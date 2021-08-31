const express = require("express");
const router = express.Router();
const api = require("../models/api.json");

// PAMERAN
function shuffle(array) {
	var currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
router.get("/", (req, res) => {
	const pameran = shuffle(api.pameran);
	return res.render("pameran", { pageName: "/pameran", pameran });
});

module.exports = router;
