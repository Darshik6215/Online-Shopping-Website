const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// middleware:
app.use(express.urlencoded({ extended: true }));
// ejs:
app.set("view engine", "ejs");
// views folder path:
app.set("views", path.join(__dirname, "views"));
// public folder static file:
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
