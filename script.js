// window.addEventListener("load", () => main());

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const players = { p1: "X", p2: "O" };
const currentMove = 1;
totalMoves = 9;
let currentplayer = "p1";

let playeroneboxes = [];
let playertwoboxes = [];

const grids= [1,2,3,4,5,6,7,8,9];
document.querySelector('.grids').innerHTML = grids.map(v=>`       
<div class="grid-unit" id="${v}" onclick="selectData(${v})"></div>`).join('')

// const main = () => {

  const checkIfWon =(arr)=>{
      const tempArr =arr;
      console.log('here',tempArr);
      winningCombinations.forEach(v=>{
        const winArr = v.map(v=>tempArr.includes(v));
        if(winArr.every(Boolean)){
          console.log(currentplayer+ " won");
        }
      });
  }
//   console.log(currentplayer);
  document.getElementById(
    "current-player"
  ).innerHTML = `Your Move: ${currentplayer}`;

const gridUnit = document.querySelectorAll(".grid-unit");
const selectData=(id)=>{
   const val = document.getElementById(id);
         if (val.innerHTML == "") {
        if (currentplayer == "p1") {
          playeroneboxes=[...playeroneboxes,(parseInt(val.getAttribute("id")))];
          checkIfWon(playeroneboxes);
          currentplayer = "p2";
        } else {
          playertwoboxes=[...playertwoboxes,(parseInt(val.getAttribute("id")))];
          checkIfWon(playertwoboxes);
          currentplayer = "p1";
        }
        val.innerHTML = `<h1>${players[currentplayer]}</h1>`;
      }

      document.getElementById(
        "current-player"
      ).innerHTML = `Your Move ${currentplayer}`;
 }
  // gridUnit.forEach((val) =>
  //   val.addEventListener("click", () => {
  //     //   console.log(val);
  //     if (val.innerHTML == "") {

  //       if (currentplayer == "p1") {
  //         playeroneboxes=[...playeroneboxes,(parseInt(val.getAttribute("id")))];
  //         checkIfWon(playeroneboxes);
  //         currentplayer = "p2";
  //       } else {
  //         playertwoboxes=[...playertwoboxes,(parseInt(val.getAttribute("id")))];
  //         checkIfWon(playeroneboxes);
  //         currentplayer = "p1";
  //       }
  //       checkIfWon();
  //       val.innerHTML = `<h1>${players[currentplayer]}</h1>`;
  //     }

  //     document.getElementById(
  //       "current-player"
  //     ).innerHTML = `Your Move ${currentplayer}`;

  //   })
  // );


const checkCombination = (playerBoxes) =>{
    console.log(playerBoxes)
}