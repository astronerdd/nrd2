const express = require("express");
const mysql = require("mysql2");


const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "node_lab"
});

db.connect(err =>{
    if(err){
        console.log("error");
    }
    else{
        console.log("suXess");
    }

});

app.post("/register", (req, res) => {
    const {username, password} = req.body;

    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], err =>{
        if(err){
            return res.send("error");
            res.send("done");
        }
    });
});

app.listen(5500, () => console.log("http://localhost:5500"));