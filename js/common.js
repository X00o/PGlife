window.addEventListener("load", function () {
    var signup_form = document.getElementById("signup-form");
    signup_form.addEventListener("submit", function (event) {
        var XHR = new XMLHttpRequest();
        var form_data = new FormData(signup_form);

        // On success
        XHR.addEventListener("load", signup_success);

        // On error
        XHR.addEventListener("error", on_error);

        // Set up request
        XHR.open("POST", "api/signup_submit.php");

        // Form data is sent with request
        XHR.send(form_data);

        document.getElementById("loading").style.display = 'block';
        event.preventDefault();
    });

    var login_form = document.getElementById("login-form");
    login_form.addEventListener("submit", function (event) {
        var XHR = new XMLHttpRequest();
        var form_data = new FormData(login_form);

        // On success
        XHR.addEventListener("load", login_success);

        // On error
        XHR.addEventListener("error", on_error);

        // Set up request
        XHR.open("POST", "api/login_submit.php");

        // Form data is sent with request
        XHR.send(form_data);

        document.getElementById("loading").style.display = 'block';
        event.preventDefault();
    });
});

var signup_success = function (event) {
    document.getElementById("loading").style.display = 'none';

    var response = JSON.parse(event.target.responseText);
    if (response.success) {
        alert(response.message);
        window.location.href = "index.php";
    } else {
        alert(response.message);
    }
};

var login_success = function (event) {
    document.getElementById("loading").style.display = 'none';

    var response = JSON.parse(event.target.responseText);
    if (response.success) {
        location.reload();
    } else {
        alert(response.message);
    }
};

var on_error = function (event) {
    document.getElementById("loading").style.display = 'none';

    alert('Oops! Something went wrong.');
};