const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const newGame = document.querySelector(".newGame");

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
    enableBtn();
}

function enableBtn(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
});


function disableBtn(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function MessageWin(win1){
    console.log("Winner",win1)
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
            }
        }
    }
}