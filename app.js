const cell = document.querySelectorAll(".cell")
const mstBoard = document.querySelector(".msg-cont")
const ui = document.getElementById("gameui")
const msg = document.getElementById("msg")
let turnx = true;
let count = 0;
let wingame = false;
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
]

cell.forEach((cel)=> {
  cel.addEventListener("click", () => {
    if (turnx){
      cel.innerText = "X";
      turnx = false;
    } else {
      cel.innerText = "O";
      turnx = true;
    }
    checkWin();
    count++;
    dwaw()
  }, {once: true})
});

const checkWin = () => {
  for (win of wins) {
    let c1 = cell[win[0]].innerText;
    let c2 = cell[win[1]].innerText;
    let c3 = cell[win[2]].innerText;
    if(c1 != "" && c2 != "" && c3 != ""){
      if (c1 === c2 && c2 === c3){
        mstBoard.style.visibility = "visible";
        ui.classList.add("blur")
        msg.innerText = `${c1} is the Winner!!!`;
        wingame = true;
      }
    }
  }
}

function dwaw() {
  if (count > 8 && !wingame) {
    mstBoard.style.visibility = "visible";
    ui.classList.add("blur")
    msg.innerText = "It's a Draw"
  }
}
