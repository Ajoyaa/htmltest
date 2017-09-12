var pics = document.getElementById("pics");

function createImage(i) {
    var picture = document.createElement("img");
    picture.src = "img/aap" + i + ".jpg";
    pics.appendChild(picture);
}

function createMonkeyArray() {
    var monkeyNumber = 0;
    var myMonkies = [];

    while(myMonkies.length <= 8) {
        //console.log("aantal elementen is: "+ myMonkies.length);
        monkeyNumber = Math.floor((Math.random() * 9) + 1);
        //console.log("findindex is " + myMonkies.lastIndexOf(monkeyNumber));
        if(myMonkies.lastIndexOf(monkeyNumber) == -1) {
            myMonkies.push(monkeyNumber);
            //console.log(myMonkies);
        }
    }
    return myMonkies;
}

var myMonkies = createMonkeyArray();

for(var i = 0; i < 9; i++) {
    createImage(myMonkies[i]);
}
