const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/assets", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	return res.render("buku_tamu");
});

app.post("/", (req, res) => {
	return res.redirect('/home');
});

app.get("/home", (req, res) => {
	return res.render("index", { pageName: "/home" });
});
app.get("/tentang", (req, res) => {
	return res.render("tentang", { pageName: "/tentang" });
});
app.get("/lomba", (req, res) => {
	return res.render("lomba", { pageName: "/lomba" });
});
app.get("/lomba/poster", (req, res) => {
	return res.render("lomba_poster", { pageName: "/lomba" });
});
app.get("/lomba/fotografi", (req, res) => {
	return res.render("lomba_fotografi", { pageName: "/lomba" });
});
app.get("*", (req, res) => {
	return res.render("maintenance");
});
app.listen(8000, () => console.log("app started at port 8000"));
