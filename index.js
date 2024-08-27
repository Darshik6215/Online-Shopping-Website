const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
// const data = require("./api/data");

// middleware:
app.use(express.urlencoded({ extended: true }));
// public folder static file:
app.use(express.static(path.join(__dirname, "public")));
// ejs:
app.set("view engine", "ejs");
// views folder path:
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/men", (req, res) => {
  res.render("men");
});

app.get("/women", (req, res) => {
  res.render("women");
});

app.get("/kids", (req, res) => {
  res.render("kids");
});

app.get("/watch", (req, res) => {
  res.render("watch");
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
