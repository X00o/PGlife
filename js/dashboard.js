window.addEventListener("load", function () {
    var is_interested_images = document.getElementsByClassName("is-interested-image");
    Array.from(is_interested_images).forEach(element => {
        element.addEventListener("click", function (event) {
            var XHR = new XMLHttpRequest();
            var property_id = event.target.getAttribute("property_id");

            // On success
            XHR.addEventListener("load", remove_interested_success);

            // On error
            XHR.addEventListener("error", on_error);

            // Set up request
            XHR.open("GET", "api/toggle_interested.php?property_id=" + property_id);

            // Initiate the request
            XHR.send();

            document.getElementById("loading").style.display = 'block';
            event.preventDefault();
        });
    });
});

var remove_interested_success = function (event) {
    document.getElementById("loading").style.display = 'none';

    var response = JSON.parse(event.target.responseText);
    if (response.success) {
        var property_id = response.property_id;

        document.getElementsByClassName("property-id-" + property_id)[0].style.display = 'none';
    }
};
