const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "node_lab"
});

// ADD
app.post("/add", (req, res) => {
    const { item, price } = req.body;

    db.query("INSERT INTO cart (item, price) VALUES (?, ?)", [item, price]);
    res.send("added");
});

// SHOW
app.get("/cart", (req, res) => {
    db.query("SELECT * FROM cart", (err, result) => {
        res.json(result);
    });
});

// DELETE
app.post("/delete", (req, res) => {
    const { id } = req.body;

    db.query("DELETE FROM cart WHERE id=?", [id]);
    res.send("deleted");
});

app.listen(5500, () => console.log("http://localhost:5500"));