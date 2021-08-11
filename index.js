const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/assets", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.render("index"));
app.get("/faq", (req, res) => res.render("faq"));
app.listen(8000, () => console.log("app started at port 8000"));
