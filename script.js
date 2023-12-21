window.onload = function () {
    var cells = document.getElementsByClassName("cell");

    for (var i = 0; i < cells.length; i++) {
        cells[i].querySelector("i").className = "fa-regular fa-square-full";
    }
}

var Player_Turn = false;
var draw = false;
var gameOver = false;
function printWinner(count1,count2)
{
    let p = document.querySelector("p");
    if (count1 == 3) {
        console.log("player1Won");
        gameOver = true;
        p.innerHTML = "Player 1 won!";
    }
    else if (count2 == 3) {
        console.log("player2Won");
        gameOver = true;
        p.innerHTML = "Player 2 won!";
    }
}
function checkDraw() {
    var cells = document.getElementsByClassName("cell");
    let p = document.querySelector("p");
    draw=true;
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].querySelector("i").getAttribute("class") == "fa-regular fa-square-full") {
            draw = false;
        }
    }
    if (draw) {
        gameOver = true;
        console.log("draw");
        p.innerHTML = "Draw!";
        p.style.marginLeft="600px";
    }
    
}

function checkOver() {
    var count1 = 0;
    var count2 = 0;
    for (let j = 0; j < 3; j++) {
        var row = document.getElementsByClassName("r-"+j);
        for (var i = 0; i < row.length; i++) {
            if (row[i].querySelector("i").getAttribute("class") == "fa-solid fa-0") {
                count1++;
            }
            else if (row[i].querySelector("i").getAttribute("class") == "fa-solid fa-xmark") {
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
            if (col[i].querySelector("i").getAttribute("class") == "fa-solid fa-0") {
                count1++;
            }
            else if (col[i].querySelector("i").getAttribute("class") == "fa-solid fa-xmark") {
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
            if (row[i].querySelector("i").getAttribute("class") == "fa-solid fa-0" && i==j) {
                count1++;
            }
            else if (row[i].querySelector("i").getAttribute("class") == "fa-solid fa-xmark" && i==j){
                count2++;
            }
            
            
        }
        printWinner(count1,count2);
    
    }
    count1=0;
    count2=0;

    for (let j = 0; j < 3; j++) {
        var row = document.getElementsByClassName("r-"+j);
        for (var i = 0; i < row.length; i++){
            if (row[i].querySelector("i").getAttribute("class") == "fa-solid fa-0" && row.length-1-i==j) {
                count1++;
            }
            else if (row[i].querySelector("i").getAttribute("class") == "fa-solid fa-xmark" && row.length-1-i==j){
                count2++;
            }
            
            
        }
        printWinner(count1,count2);
    
    }
    count1=0;
    count2=0;


    if (!gameOver) { checkDraw(); }
}

function Put(obj) {
    if (obj.querySelector("i").getAttribute("class") != "fa-regular fa-square-full") {
        return;
    }

    if (Player_Turn == false) {
        setter_value = "1";
        Player_Turn = true;
        var icon = obj.querySelector("i");
        if(icon)
        {
            icon.className = "fa-solid fa-0";
        }

        console.log(icon, icon.className);
    }
    else {
        setter_value = "-1";
        Player_Turn = false;
        var icon = obj.querySelector("i");
        if(icon)
        {
            icon.className = "fa-solid fa-xmark";
        }
        
        console.log(icon, icon.className);
    }

    
    console.log(setter_value, obj);

    checkOver();

}
