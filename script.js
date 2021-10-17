var counter = 0;

function decreaseCounter() {
    var x = document.getElementById("pcontainer");
    var y = document.getElementById("decreaseCounter");
    if (counter == 0) {
        y.ariaDisabled = true;
        y.style.opacity = .3;
    }
    else {
        if (counter == 1) {
            y.style.opacity = .3;
        }
        counter--;
        x.innerHTML = counter;
    }
}

function increaseCounter() {
    var x = document.getElementById("pcontainer");
    var y = document.getElementById("decreaseCounter");
    counter++;
    x.innerHTML = counter;
    if (counter > 0) {
        y.style.opacity = 1;
        y.style.border = 2;
    }
}
