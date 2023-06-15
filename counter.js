let counterElement = document.getElementById("paRa");


function onIncrement() {
    let prevCounter = counterElement.textContent;
    let upCounter = parseInt(prevCounter) + 1;
    console.log(upCounter);
    counterElement.textContent = upCounter;
    if (upCounter < 0) {
        counterElement.style.color = "red";
    } else if (upCounter > 0) {

        counterElement.style.color = "green";
    } else {
        counterElement.style.color = "black";
    }




}

function onDecrement() {
    let prevCounter = counterElement.textContent;
    let upCounter = parseInt(prevCounter) - 1;
    console.log(upCounter);
    counterElement.textContent = upCounter;
    if (upCounter < 0) {
        counterElement.style.color = "red";
    } else if (upCounter > 0) {

        counterElement.style.color = "green";
    } else {
        counterElement.style.color = "black";
    }

}

function onReset() {
    let upCounter = 0;
    counterElement.textContent = upCounter;
    if (upCounter < 0) {
        counterElement.style.color = "red";
    } else if (upCounter > 0) {

        counterElement.style.color = "green";
    } else {
        counterElement.style.color = "black";
    }


}