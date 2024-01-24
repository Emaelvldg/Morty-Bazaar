'use strict'


var ok = document.querySelector("#bouton");
ok.addEventListener("click",triggerListener);

function triggerListener() {
    var pseudo = prompt("Indique ton pseudo");
}

var fooElement = document.querySelector("#co-js");
fooElement.innerText = (pseudo);

