
function planTrip() {

    const destination = document.querySelector("input").value.trim();

    if (destination === "") {
        alert("Please enter your destination!");
    } else {
        alert("Welcome to TRIPNOVA! Your trip to " + destination + " is ready to plan.");
    }

}
