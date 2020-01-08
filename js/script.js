var tile1 = "i"
var tile2 = "h"
var tile3 = "g"
var tile4 = "f"
var tile5 = "e"
var tile6 = "d"
var tile7 = "c"
var tile8 = "b"
var tile9 = "a"


let currentPlayer = "X"
let turnNum = 0;
let win = false
function performLogic(button, tile) {
    turnNum += 1
    if (turnNum % 2 === 0) {
        $(tile).text("X");
        currentPlayer = "X"
    } else {
        $(tile).text("O")
        currentPlayer = "O"
    }
        console.log(tile1)
        console.log(tile2)
        console.log(tile3)
        if(tile1 === tile2 && tile2 === tile3 || tile4 === tile5 && tile5 === tile6 || tile7 === tile8 && tile8 === tile9 || tile1 === tile4 && tile4 === tile7 || tile2 === tile5 && tile5 === tile8 || tile3 === tile6 && tile9 === tile6 || tile1 === tile5 && tile5 === tile9 || tile3 === tile5 && tile5 === tile7) {
            $("title").text(currentPlayer + " Wins!!")
            win = true;
            console.log("working")
        }
        if(win === false && turnNum >= 9) {
            $("#title").text("Tie. Keep going!");
        } 
        if(win === true && currentPlayer === "O") {
            $("#title").text("O Wins!")
        }
        if(win === true && currentPlayer == "X") {
            $("#title").text("X Wins!!")
        }
}

$("#button1").click(function() {
    tile1 = currentPlayer
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    tile2 = currentPlayer
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    tile3 = currentPlayer
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    tile4 = currentPlayer
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    tile5 = currentPlayer
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    tile6 = currentPlayer
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    tile7 = currentPlayer
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    tile8 = currentPlayer
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    tile9 = currentPlayer
    performLogic("#button9","#tile9");

});

