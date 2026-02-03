const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const newGame = document.querySelector(".newGame");
const msg_text = document.querySelector(".msg-text");

turnO = true;
const chance = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

resetBtn.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)
function resetGame(){
    turnO = true;
    msg_text.innerText = "";
    enableBtn();
}

function enableBtn(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "white"
    }
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            box.style.color = "green"
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "blue"
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
});


function disableBtn(){
    for(let box of boxes){
        box.disabled = true;
        box.style.backgroundColor = "rgb(202, 203, 203);"
    }
}

function MessageWin(win1){
    msg_text.innerText =win1 + " is Winner";
    disableBtn();
}

const checkWin = ()=>{
    for (const pattern of chance) {
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                MessageWin(pos1);
                boxes[pattern[0]].style.backgroundColor = "rgb(247, 50, 50)"
                boxes[pattern[1]].style.backgroundColor = "rgb(247, 50, 50)"
                boxes[pattern[2]].style.backgroundColor = "rgb(247, 50, 50)"
            }
        }
    }
}

//Disable code reading----------------->

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
};