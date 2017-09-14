var pics = document.getElementsByTagName("img");

var monkeyNumber = 0;
var monkeyIndex = 0;
var myMonkies = [];

while(myMonkies.length <= 8) {
    monkeyNumber = Math.floor((Math.random() * 9) + 1);
    if(myMonkies.lastIndexOf(monkeyNumber) == -1) {
        myMonkies.push(monkeyNumber);
    }
}
for (var img in pics) {
    pics[img].src = "img/aap" + myMonkies[monkeyIndex] +".jpg";
    monkeyIndex++;
}
