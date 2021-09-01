const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("", express.static(path.join(__dirname, "public")));

app.use('/', require('./routes/homeRouter'));
app.use('/tentang', require('./routes/tentangRouter'));
app.use('/pra-event', require('./routes/praEventRouter'));
app.use('/lomba', require('./routes/lombaRouter'));

app.get("/pug", (req, res) => res.send("see 🥰"));

app.get("*", (req, res) => {
	return res.render("maintenance");
});
app.listen(3000, () => console.log("app started at port 3000"));
