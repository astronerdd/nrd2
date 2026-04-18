function add() {
    let item = document.getElementById("item").value;
    let price = document.getElementById("price").value;

    fetch("/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ item, price })
    });
}

function show() {
    fetch("/cart")
    .then(res => res.json())
    .then(data => {
        let rows = "";

        data.forEach(x => {
            rows += `
                <tr>
                    <td>${x.item}</td>
                    <td>${x.price}</td>
                    <td><button onclick="del(${x.id})">X</button></td>
                </tr>
            `;
        });

        document.getElementById("data").innerHTML = rows;
    });
}

function del(id) {
    fetch("/delete", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ id })
    })
    .then(() => show());
}