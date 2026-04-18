document.getElementById("LogForm").onsubmit = function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("/login", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({username, password})
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("message").innerText = data;
    });
};