
var axios = require("axios");
const url = "http://127.0.0.1/php-react/back-end/api";


export async function login(email, pass) {
    var data = {
        email:email,
        passwrd:pass
    }
    await axios.post(
        `${url}/loginProf.php`,
        JSON.stringify(data)
    ).then(res => {
        console.log((res));
        console.log(res.data);
        console.log(res);
    });
}

export async function log(email, pass) {
    var data = {
        email:email,
        passwrd:pass
    }
    await fetch(`${url}/loginProf.php`, {
        method: "post",
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(result => {
            console.log(result);
        });
}