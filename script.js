var count = 0;

function decreaseCounter() {
    var i = document.getElementById("pcontainer");
    var j = document.getElementById("decreaseCounter");
    if (count == 0) {
        j.ariaDisabled = true;
        j.style.opacity = .3;
    }
    else {
        if (count == 1) {
            j.style.opacity = .3;
        }
        count--;
        i.innerHTML = count;
    }
}

function increaseCounter() {
    var i = document.getElementById("pcontainer");
    var j = document.getElementById("decreaseCounter");
    count++;
    i.innerHTML = count;
    if (count > 0) {
        j.style.opacity = 1;
        j.style.border = 2;
    }
}
