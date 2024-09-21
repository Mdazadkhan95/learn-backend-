let express = require("express");

let app = express();

let port = 8080;

app.listen(port, () => {
    console.log("server is started.");
})

app.get("/", (req, res) => {
    res.send("this is default path")

})

app.get("/home", (req, res) => {
    res.send("this is home path");
})
