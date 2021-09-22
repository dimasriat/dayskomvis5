const express = require("express");
const router = express.Router();
const api = require("../models/api.json");

// pameran
function shuffle(array, active = true) {
	var currentIndex = array.length,
		randomIndex;

	if (!active) 
		return array;

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
	const pameran = shuffle(api.pameran, false);
	return res.render("pameran", { pageName: "/pameran", pameran });
});
for (let id = 1; id <= 12; id++) {
	router.get(`/${id}`, (req, res) => {
		return res.render(`pameran/pameran_${id}`, {
			pageName: "/pameran",
			karya: api.pameran.filter(item => item.id === id)[0],
		});
	});
}

module.exports = router;
