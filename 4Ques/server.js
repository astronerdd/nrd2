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


app.post("/pay", (req, res) => {
    const { cardno, cvv, exp, otp } = req.body;

    db.query(
        "INSERT INTO payment (cardno, cvv, exp, otp) VALUES (?, ?, ?, ?)",
        [cardno, cvv, exp, otp]
    );

    res.send("Payment Success");
});