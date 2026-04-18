function pay() {

    let cardno = document.getElementById("cardno").value;
    let cvv = document.getElementById("cvv").value;
    let exp = document.getElementById("exp").value;
    let otp = document.getElementById("otp").value;

    let msg = document.getElementById("msg");

    // simple validation
    if (cardno === "" || cvv === "" || exp === "" || otp === "") {
        msg.innerText = "Fill all fields";
        return;
    }

    fetch("/pay", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ cardno, cvv, exp, otp })
    })
    .then(res => res.text())
    .then(data => {
        msg.innerText = data;
    });
}