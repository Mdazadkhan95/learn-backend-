const express = require("express");

let app = express();

const port = 3000;



app.listen(port, () => {

    console.log(`app is lstening on port ${port}`);

})

// app.use((req, res) => {
//     // console.log(req);
//     // console.log(res);
//     // res.send(`HI Your server is started on this port ${port} `)

//     // res.send({
//     //     name: "azad",
//     //     class: "bca"
//     // })

//     // res.send("<h1> HI, it is a first heading</h1> <p>this <b> is a paragraph </b></p>")

//     let code = "<h1> HI, it is a first heading</h1> <p>this <b> is a paragraph </b></p>";

//     res.send(code);
// })



// app.get("/", (req, res) => {
//     console.log("request is received ");
//     res.send("this is a default path")
    
// })

// app.get("/home", (req, res) => {
//     console.log("request is received ");
//     res.send("this is a h path")
    
// })

// app.get("/html", (req, res) => {
//     console.log("request is received ");

//     let code = ' <h1>this is demo page</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eveniet modi nemo aperiam atque? Earum incidunt iste quibusdam repellendus quas!</p><form action=""> <input type="text"><input type="text"><input type="text"><button>submit</button></form>'
//     res.send(code)
    
// })

// app.get("/apple", (req, res) => {
//     res.send("this is apple path");
// })

// app.get("/fruit", (req, res) => {
//     let fruit = "<ul> <li>Banana</li> <li>apple</li> <li>mango</li> </ul>"
//     res.send(`this is a fruits path ${fruit}`)
// })
// app.get("/banana", (req, res) => {
//     res.send("this is banana path");
// })

// app.get("/search", (req, res) => {
//     let search = '<input type="text"> <button>submit</button>'
//     res.send(search);
// })

// app.get("/movie", (req, res) => {
//     let search = '<input type="text"> <button>submit</button>'
//     res.send(search);
// })

// app.get("*", (req, res) => {
//     res.send("this path is does'nt exists")
// })



// **** path parameter *****//


app.get("/", (req, res) => {
    res.send("this is default path")
})

app.get("/:username/:id", (req, res) => {
    // console.log(req.paramsnod);

    let {username, id} = req.params;
    res.send(` hi i am  ${username}, and my  id is ${id}`)
})

app.get("/search", (req, res) => {
    // console.log(req.query);
    let {q} = req.query;
    res.send(`search reasults for query: ${q}`);
})