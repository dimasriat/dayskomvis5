const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("", express.static(path.join(__dirname, "public")));

// BUKU TAMU
app.get("/", (req, res) => {
	// return res.render("buku_tamu");
	return res.redirect('/home');

});
app.post("/", (req, res) => {
	return res.redirect('/home');
});

// HOME
app.get("/home", (req, res) => {
	return res.render("index", { pageName: "/home" });
});

// PAMERAN
app.get("/pameran", (req, res) => {
	return res.render("pameran", { pageName: "/pameran" });
});

// LOMBA
app.get("/lomba", (req, res) => {
	return res.render("lomba", { pageName: "/lomba" });
});
app.get("/lomba/poster", (req, res) => {
	return res.render("lomba_poster", { pageName: "/lomba" });
});
app.get("/lomba/fotografi", (req, res) => {
	return res.render("lomba_fotografi", { pageName: "/lomba" });
});

// TENTANG
app.get("/tentang", (req, res) => {
	return res.render("tentang", { pageName: "/tentang" });
});

// TESTINGGG
app.get('/pug', (req, res) => res.send('see 🥰'));

app.get("*", (req, res) => {
	return res.render("maintenance");
});
app.listen(3000, () => console.log("app started at port 3000"));
