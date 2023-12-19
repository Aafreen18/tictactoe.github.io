window.onload = function () {
    var cells = document.getElementsByClassName("cell");

    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "0";
    }
}

var Player_Turn = false;
var setter_value;
var draw = false;
function checkDraw() {
    var cells = document.getElementsByClassName("cell");

    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerText != "0") {
            draw = true;
        }
        else {
            continue;
        }
    }
}

function checkOver() {
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    
    for (let j = 0; j < 3; j++) {
        var row = document.getElementsByClassName("r-"+j);
        for (var i = 0; i < row.length; i++) {
            if (row[i].innerText == "1") {
                count1++;
            }
            else if (row[i].innerText == "-1") {
                count2++;
            }

            if (count1 == 3) {
                console.log("player1Won");
            }
            else if (count2 == 3) {
                console.log("player2Won");
            }
        }
        count1=0;
        count2=0;
    }
    for (let j = 0; j < 3; j++) {
        var row = document.getElementsByClassName("c-"+j);
        for (var i = 0; i < row.length; i++) {
            if (row[i].innerText == "1") {
                count1++;
            }
            else if (row[i].innerText == "-1") {
                count2++;
            }

            if (count1 == 3) {
                console.log("player1Won");
            }
            else if (count2 == 3) {
                console.log("player2Won");
            }
        }
        count1=0;
        count2=0;
    }
    for (let j = 0; j < 3; j++) {
        var row = document.getElementsByClassName("c-"+j);
        for (var i = 0; i < row.length; i++) {
            if (row[i].innerText == "1" && i==j) {
                count3++;
            }
            else if (row[i].innerText == "-1" && i==j) {
                count4++;
            }

            else if (row[row.length-1-i].innerText == "1" && i==j) {
                count3++;
            }
            else if (row[row.length-1-i].innerText == "-1" && i==j) {
                count4++;
            }

            if (count3 == 3) {
                console.log("player1Won");
            }
            if (count4 == 3) {
                console.log("player2Won");
            }
        }
    }
    checkDraw();
}

function Put(obj) {
    if (obj.innerText != "0") {
        return;
    }

    if (Player_Turn == false) {
        setter_value = "-1";
        Player_Turn = true;
    }
    else {
        setter_value = "1";
        Player_Turn = false;
    }

    obj.innerText = setter_value;
    console.log(setter_value, obj);

    checkOver();

}
