var ogen = ["img/ogen1.jpg","img/ogen2.jpg","img/ogen3.jpg","img/ogen4.jpg","img/ogen5.jpg"];
var neuzen = ["img/neus1.jpg","img/neus2.jpg","img/neus3.jpg","img/neus4.jpg","img/neus5.jpg"];
var kinnen = ["img/kin1.jpg","img/kin2.jpg","img/kin3.jpg","img/kin4.jpg","img/kin5.jpg"];

var oogNum = 0;
var neusNum = 0;
var kinNum = 0;

var ogenHolder = document.getElementById("ogenholder");
var neuzenHolder = document.getElementById("neuzenholder");
var kinnenHolder = document.getElementById("kinnenholder");


function getOogNum() {
    if(oogNum < 4) {
        oogNum++;
    } else {
        oogNum = 0;
    }
}
function getNeusNum() {
    if(neusNum < 4) {
        neusNum++;
    } else {
        neusNum = 0;
    }
}
function getKinNum() {
    if(kinNum < 4) {
        kinNum++;
    } else {
        kinNum = 0;
    }
}
ogenHolder.addEventListener("click", function() {
    getOogNum();
    ogenHolder.style.backgroundImage = "url('" + ogen[oogNum] + "')";

});
neuzenHolder.addEventListener("click", function() {
    getNeusNum();
    neuzenHolder.style.backgroundImage = "url('" + neuzen[neusNum] + "')";

});
kinnenHolder.addEventListener("click", function() {
    getKinNum();
    kinnenHolder.style.backgroundImage = "url('" + kinnen[kinNum] + "')";

});