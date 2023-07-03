let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("autocomplete"),
        {
            fields: ["place_id", "geometry", "name"],
        }
    );
}
autocomplete.addListener("place_changed", onPlaceChanged);
function onPlaceChanged() {
    let place = autocomplete.getPlace();

    if (!place.geometry) {
        // Use did not select a prediction; reset the input field
        document.getElementById("autocomplete").placeholder = "Enter a place";
    } else {
        // Display details about the valid place
        document.getElementById("details").innerHTML = place.name;
    }
}
