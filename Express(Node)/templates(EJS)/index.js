const express = require("express");

const app = express();
const path = require("path");
const port = 8080;


app.use(express.static (path.join(__dirname, "/public/csss")))
app.use(express.static (path.join(__dirname, "/public/jss")))

const instaData = require("./data.json");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.set("views", path.join(__dirname, "/views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/rolldice", (req, res) => {
  let rolldice = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { rolldice });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const data = instaData[username];
  // const followers = ["sana","azad", "shazad"];
  // console.log(username);
  console.log(data);
  res.render("instagram", {data});
  res.render("error")
});



app.get("/condition", (req, res) => {
    let rolldice = Math.floor(Math.random()*6)+1;
  res.render("condion", { rolldice});
});

// app.get("/e", (req, res) => {
//   app.render("error.ejs")
// })