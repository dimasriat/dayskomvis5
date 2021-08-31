const express = require("express");
const router = express.Router();
const api = require("../models/api.json");

// pra event
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
	const pra_event = shuffle(api.pra_event);
	return res.render("pra_event", { pageName: "/pra-event", pra_event });
});
router.get("/1", (req, res) => {
	const id = 1;
	return res.render(`pra_event/pra_event_${id}`, {
		pageName: "/pra-event",
		karya: api.pra_event[id - 1],
	});
});
router.get("/3", (req, res) => {
	const id = 3;
	return res.render(`pra_event/pra_event_${id}`, {
		pageName: "/pra-event",
		karya: api.pra_event[id - 1],
	});
});
router.get("/5", (req, res) => {
	const id = 5;
	return res.render(`pra_event/pra_event_${id}`, {
		pageName: "/pra-event",
		karya: api.pra_event[id - 1],
	});
});


module.exports = router;
