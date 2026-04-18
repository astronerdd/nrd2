const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const db = mysql.createConnection({
    host : "localhost",
    user :"root",
    password : "password",
    database : "node_lab"
});

db.connect(err => {
    if(err){
        console.log("DB Error:", err);
    }
    else{
        console.log("Success");
    }
});

app.post("/login", (req, res) =>{
    const {username, password} = req.body;

    db.query(
        "SELECT * FROM users WHERE username = ? and password = ?", [username, password], (err, result) => {
            if(err){
                return res.send("error")
            }
            if (result.length >0){
                res.send("successful");
            }

            else{
                res.send("Invalid");
            }
        } 
    );
});

app.listen(5500, () => console.log("live @ localhost:/5500"));