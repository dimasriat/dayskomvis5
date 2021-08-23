const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/assets", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
	return res.render("index", { pageName: "/" });
});
app.get("/tentang", (req, res) => {
	return res.render("tentang", { pageName: "/tentang" });
});
app.get("/lomba", (req, res) => {
	// return res.render("lomba", { pageName: "/lomba" });
	return res.redirect(
		"https://docs.google.com/forms/d/e/1FAIpQLSetIZ9EhLXZFn6rFm56dHf-WlIuR-r9AqaFuoCb_TR9_dW0Qw/viewform"
	);
});
app.get("*", (req, res) => {
	return res.render("maintenance");
});
app.listen(8000, () => console.log("app started at port 8000"));
