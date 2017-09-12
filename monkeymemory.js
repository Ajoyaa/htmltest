var pics = document.getElementById("pics");

function createImage(i) {
    var picture = document.createElement("img");
    picture.src = "img/aap" + i + ".jpg";
    picture.addEventListener("click", function() {
        picture.style.border = "1px red solid";
    });
    pics.appendChild(picture);
}

function createMonkeyArray() {
    var monkeyNumber = 0;
    var myMonkies = [];

    while(myMonkies.length <= 8) {
        monkeyNumber = Math.floor((Math.random() * 9) + 1);
        if(myMonkies.lastIndexOf(monkeyNumber) == -1) {
            myMonkies.push(monkeyNumber);
        }
    }
    return myMonkies;
}


var myMonkies = createMonkeyArray();

for(var i = 0; i < 9; i++) {
    createImage(myMonkies[i]);
}
