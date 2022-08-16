const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, () => {
    console.log("Servidor funcionando");
})

const publicPath = path.resolve (__dirname, "./public"); 
app.use(express.static(publicPath));

app.get(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

