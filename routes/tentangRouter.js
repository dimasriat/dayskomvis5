const express = require('express');
const router = express.Router();

// HOME
router.get("/", (req, res) => {
	return res.render("tentang", { pageName: "/tentang" });
});

module.exports = router;