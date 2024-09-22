let express = require("express");
let app = express();
let port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`server is started on this ${port} port`);
    
})

app.get("/", (req, res) => {
    res.send("this is defaul")
})

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`Standard get response welcome ${user}!`);
    console.log(user, password);
    
})
app.post("/register", (req, res) => {
    let {user, password} = req.body;
    console.log(user, password);
    
    res.send(`Standard post response welcome ${user}!`);
})