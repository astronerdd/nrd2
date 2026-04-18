app.post("/pay", (req, res) => {
    const { cardno, cvv, exp, otp } = req.body;

    db.query(
        "INSERT INTO payment (cardno, cvv, exp, otp) VALUES (?, ?, ?, ?)",
        [cardno, cvv, exp, otp]
    );

    res.send("Payment Success");
});