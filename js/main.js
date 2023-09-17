function signup(e) {
    event.preventDefault();
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username: username,
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);

    localStorage.setItem(username, json);
    if (user == null) {
        alert("vui lòng nhập thông tin")
    }
    else {
        alert("đăng ký thành công")
        window.location.href = "login.html"
    };
}

function signin(e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(email, password, data);
    var data = JSON.parse(user);
    if (user === null) {
        alert("vui lòng nhập thông tin")
    }
    else if (email === data.email && password === data.password) {
        alert("đăng nhập thành công")
        window.location.href = "index.html"
    }
    else {
        alert("đăng nhập không thành công")
    }
}