window.onload = displayed;
function displayed() {
    var cells = document.getElementsByClassName("cell");
    
    for (var i = 0; i < cells.length; i++) {
        cells[i].querySelector("i").className = "fa-regular fa-square-full";
    }
}

function resetGame(){
    gameOver = false;
    Player_Turn = false;
    draw = false;
    var content = document.querySelector(".content");
    content.style.display="flex";
    p.innerHTML = "";
    Btn.innerHTML = "";
    Btn.style.visibility="hidden";
    message.style.display="none";
    displayed();

}

var Player_Turn = false;
var draw = false;
var gameOver=false;
var cells = document.getElementsByClassName("cell");
var p = document.querySelector("p");
var Btn = document.querySelector("button");
var content = document.querySelector(".content");
var message = document.querySelector(".message");
message.style.display="none";
function printWinner(count1,count2)
{
    if (count1 == 3) {
        console.log("player1Won");
        gameOver = true;
        message.style.height="50%";
        message.style.display="block";
        p.innerHTML = "Player 1 won!";
        Btn.style.visibility="visible";
        Btn.innerHTML = "Play Again";
        
        content.style.display="none";
        Btn.addEventListener("click",resetGame);
    }
    else if (count2 == 3) {
        console.log("player2Won");
        gameOver = true;
        message.style.height="50%";
        message.style.display="block";
        p.innerHTML = "Player 2 won!";
        Btn.style.visibility="visible";
        Btn.innerHTML = "Play Again";
        
        content.style.display="none";
        Btn.addEventListener("click",resetGame);
    }
    
}
function checkDraw() {
    draw=true;
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].querySelector("i").getAttribute("class") == "fa-regular fa-square-full") {
            draw = false;
        }
    }
    if (draw) {
        gameOver = true;
        message.style.height="50%";
        message.style.display="block";
        console.log("draw");
        p.innerHTML = "Draw!";
        Btn.style.visibility="visible";
        Btn.innerHTML = "Play Again";
        
        content.style.display="none";
        Btn.addEventListener("click",resetGame);
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
    if (obj.querySelector("i").getAttribute("class") != "fa-regular fa-square-full" || gameOver==true) {
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
