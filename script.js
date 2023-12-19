window.onload = function () {
    var cells = document.getElementsByClassName("cell");

    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "0";
    }
}

var Player_Turn = false;
var setter_value;
var draw = false;
var gameOver = false;
function printWinner(count1,count2)
{
    if (count1 == 3) {
        console.log("player1Won");
        gameOver = true;
    }
    else if (count2 == 3) {
        console.log("player2Won");
        gameOver = true;
    }
}
function checkDraw() {
    var cells = document.getElementsByClassName("cell");

    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerText != "0") {
            draw = false;
        }
    }
    if (draw) {
        gameOver = true;
    }
    
}

function checkOver() {
    var count1 = 0;
    var count2 = 0;
    for (let j = 0; j < 3; j++) {
        var row = document.getElementsByClassName("r-"+j);
        for (var i = 0; i < row.length; i++) {
            if (row[i].innerText == "1") {
                count1++;
            }
            else if (row[i].innerText == "-1") {
                count2++;
            }
            printWinner(count1,count2);
        }
        count1=0;
        count2=0;
    }
    for (let j = 0; j < 3; j++) {
        var col = document.getElementsByClassName("c-"+j);
        for (var i = 0; i < col.length; i++) {
            if (col[i].innerText == "1") {
                count1++;
            }
            else if (col[i].innerText == "-1") {
                count2++;
            }

            printWinner(count1,count2);
        }
        count1=0;
        count2=0;
    }
    

    for (let j = 0; j < 3; j++) {
        var row = document.getElementsByClassName("r-"+j);
        for (var i = 0; i < row.length; i++){
            if (row[i].innerText == "1" && (i==j || row.length-1-i==j)) {
                count1++;
            }
            else if (row[i].innerText == "-1" && (i==j || row.length-1-i==j)){
                count2++;
            }
            
            
        }
        printWinner(count1,count2);
    
    }
    count1=0;
    count2=0;

    if (!gameOver) { checkDraw(); }
    else { }
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
