document.getElementById("RegForm").onsubmit = function(e){
    e.preventDefault();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    fetch("/register", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({username, password})
        })
        .then(res => res.text())
        .then(data => {
            document.getElementById("message").innerText = data;
    });
};