var pics = document.getElementsByTagName("img");

var monkeyNumber = 0;
var monkeyIndex = 0;
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
for (var img in pics) {
    pics[img].src = "img/aap" + myMonkies[monkeyIndex] +".jpg";
    monkeyIndex++;
}
