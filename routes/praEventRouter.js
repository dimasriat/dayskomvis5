const express = require("express");
const router = express.Router();
const api = require("../models/api.json");

// pra event
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
	const pra_event = shuffle(api.pra_event, false);
	return res.render("pra_event", { pageName: "/pra-event", pra_event });
});
for (let id = 1; id <= 20; id++) {
	router.get(`/${id}`, (req, res) => {
		return res.render(`pra_event/pra_event_${id}`, {
			pageName: "/pra-event",
			karya: api.pra_event.filter(item => item.id === id)[0],
		});
	});
}

module.exports = router;
