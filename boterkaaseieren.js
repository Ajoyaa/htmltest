var bke = document.getElementById("bke");
var xselected = [];
var oselected = [];
var player = 1;

for(var i = 0; i < 9; i++) {
    var newDiv = document.createElement("div");
    newDiv.id = "col-"+ i;
    newDiv.dataset.test = i;
    newDiv.addEventListener("click", function() {
        console.log("je klikte op vakje " + this.dataset.test);
        togglePlayer(this);
    })
    bke.appendChild(newDiv);
}

function togglePlayer(element) {
    if(player == 1) {
        element.style.backgroundImage = "url('img/iksje.jpg')";
        xselected.push(element.dataset.test);
        if (checkRows(xselected, "x")) {
            youWin("X")
        }
        player = 2;
    } else {
        oselected.push(element.dataset.test);
        if(checkRows(oselected, "o")) {
         youWin("O");
        }
        element.style.backgroundImage = "url('img/ootje.jpg')";
        player = 1;
    }
}

function youWin(i) {
    gameover = document.getElementById("gameover");
    gameover.style.display = "block";
    gameover.innerHTML = "Game Over <br>" + i + "<br>heeft gewonnen!";
}

function checkRows(selected, i) {
    selected.sort();
    str = selected.toString();
    console.log(str);
    if(str.indexOf("0,1,2") > -1) {
        console.log("Rij 1 is bezet!, " + i + " wint!");
        return true
    }
    if(str.indexOf("3,4,5") > -1) {
        console.log("Rij 2 is bezet!, " + i + " wint!");
        return true
    }
    if(str.indexOf("6,7,8") > -1) {
        console.log("Rij 3 is bezet!, " + i + " wint!");
        return true
    }

    if(str.indexOf("0") > -1 &&
        str.indexOf("4") > -1 &&
        str.indexOf("8") > -1 ) {
        console.log("Diagonaal 1 is bezet!, " + i + " wint!");
        return true
    }
    if(str.indexOf("2") > -1 &&
        str.indexOf("4") > -1 &&
        str.indexOf("6") > -1 ) {
        console.log("Diagonaal 2 is bezet!, " + i + " wint!");
        return true
    }
    if(str.indexOf("0") > -1 &&
        str.indexOf("3") > -1 &&
        str.indexOf("6") > -1 ) {
        console.log("Kolom 1 is bezet!, " + i + " wint!");
        return true
    }
    if(str.indexOf("1") > -1 &&
        str.indexOf("4") > -1 &&
        str.indexOf("7") > -1 ) {
        console.log("Kolom 2 is bezet!, " + i + " wint!");
        return true
    }
    if(str.indexOf("2") > -1 &&
        str.indexOf("5") > -1 &&
        str.indexOf("8") > -1 ) {
        console.log("Kolom 3 is bezet!, " + i + " wint!");
        return true
    }

}


