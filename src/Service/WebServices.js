var axios = require("axios");
const url = "http://127.0.0.1/php-react/back-end/api";


export function loginProf(email, pass) {
    var data = JSON.stringify({
        email: email,
        passwrd: pass
    });
    axios.post(`${url}/loginProf.php`, data)
        .then(res => {
            res.json();
        });

}

export function loginChef(email, pass) {
    var data = JSON.stringify({
        email: email,
        passwrd: pass
    });
    console.log(data);

    axios.post(`${url}/loginChef.php`, data)
        .then(res => {
            console.log((res.data));
        });
}

export function getAllProfs() {
    axios.get(`${url}/listProfs.php`)
        .then(res => {
            console.log(res);
        });
}
