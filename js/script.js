
let currentPlayer
let turnNum = 0;
let win = false


$("#button1").click(function() {
    performLogic("#button1","#tile1");
    let tile1 = currentPlayer
    console.log(tile1)
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
    let tile2 = currentPlayer
    console.log(tile1)
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
    let tile3 = currentPlayer
    console.log(currentPlayer)
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
    let tile4 = currentPlayer
    console.log(currentPlayer)
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
    let tile5 = currentPlayer
    console.log(currentPlayer)
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
    let tile6 = currentPlayer
    console.log(currentPlayer)
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
    let tile7 = currentPlayer
    console.log(currentPlayer)
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
    let tile8 = currentPlayer
    console.log(currentPlayer)
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
    let tile9 = currentPlayer
    console.log(currentPlayer)

});
function performLogic(button, tile) {
    turnNum += 1
    console.log(turnNum)
        if(turnNum % 2 === 0) {
            $(tile).text("X"); 
            currentPlayer = "X"       
        } else {
            $(tile).text("O");
            currentPlayer = "O"
        }
        if(tile1 === tile2 && tile2 === tile3 || tile4 === tile5 && tile5 === tile6 || tile7 === tile8 && tile8 === tile9 || tile1 === tile4 && tile4 === tile7 || tile2 === tile5 && tile5 === tile8 || tile3 === tile6 && tile9 === tile6 || tile1 === tile5 && tile5 === tile9 || tile3 === tile5 && tile5 === tile7) {
            $("title").text(currentPlayer + " Wins!!")
            win = true;
            console.log(win)
        }
        if(win === false && turnNum >= 9) {
            $("#title").text("Tie. Keep going!");
        } 
}
