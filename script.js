const formSubmit = document.querySelector(".formSubmit");
const nameInput = document.querySelector(".nameInput");
const playerName = document.querySelector(".playerName");
const insertName = document.querySelector(".insertName");
const containerBody = document.querySelector(".containerBody");
const computerChoose = document.querySelector(".computerChoice");
const winner = document.querySelector(".winner");
const playerchooses = document.querySelectorAll(".playerChoice > *");
const scoreBoards = document.querySelector(".scoreBoard");
const computerChooses = document.querySelectorAll(".computerChoice > *");
const instruct = document.querySelector(".instruct");
const gameOver = document.querySelector(".gameOver");
const gameOverH1 = document.querySelector(".gameOverH1");
const tryAgainBtn = document.querySelector(".tryAgainBtn");
const rulesBtn = document.querySelector(".rulesBtn");
const rulesPopUp = document.querySelector(".rulesPopUp");
const rulesOkayBtn = document.querySelector(".rulesOkayBtn");
const playAgainBtns = document.querySelectorAll("[data-againBtn]");


//Insert Name to start game

formSubmit.addEventListener("submit", closeInsertName);

function closeInsertName(e) {
  e.preventDefault();
  const trimmed = nameInput.value.trim();
  playerName.innerText = trimmed;
  if (trimmed.length > 1) {
    insertName.classList.add("hide");
    containerBody.classList.add("show");
  }
}



//Game logic

playerchooses.forEach((playerchoose) => {
  playerchoose.addEventListener("click", function gameLogic(e) {
    let playerChoice = e.target.className;

    const computerChoosesChildren = computerChoose.children;
    const randNum = Math.floor(Math.random() * 3);

    const cCChildrenRand = computerChoosesChildren[randNum];
    const computerChoice = cCChildrenRand.className;



    var le = playerchooses[0];
    var el = computerChooses[0];

    while (le, el) {
      if (le.tagName === "DIV") {
        le.removeAttribute("id");
        le.classList.remove("position");
        el.removeAttribute("id");
        el.classList.remove("position");
      }
      le = le.nextSibling;
      el = el.nextSibling;
    }
    e.target.setAttribute("id", "showMe");
    e.target.classList.add("position");
    cCChildrenRand.setAttribute("id", "showMe");
    cCChildrenRand.classList.add("position");

    computerChooses.forEach(displayMe => {
      displayMe.classList.add("userSelect");
      playerchooses.forEach(playerchoose => {
          playerchoose.classList.add("userSelect");
      });
    }); 

    
    


    setTimeout(() => {
      computerChooses.forEach(displayMe => {
        displayMe.setAttribute("id", "showMe");
        displayMe.classList.remove("position");
        displayMe.classList.remove("userSelect");
        playerchooses.forEach(playerchoose => {
            playerchoose.setAttribute("id", "showMe");
            playerchoose.classList.remove("position");
            playerchoose.classList.remove("userSelect");
        });
      });      
    }, 3000);
    setTimeout(() => {
      winner.innerText = "PICK AGAIN!!";
    }, 1800);
    

    function compare() {
      let choice1 = "scissors";
      let choice2 = "paper";
      if (choice1 === playerChoice && choice2 === computerChoice) {
        winner.innerText = "WON THIS ONE!";
      } else if (choice1 === computerChoice && choice2 === playerChoice) {
        winner.innerText = "LOST THIS ONE";
      }
    }

    compare();

    function compare1() {
      let choice1 = "rock";
      let choice2 = "scissors";
      if (choice1 === playerChoice && choice2 === computerChoice) {
        winner.innerText = "WON THIS ONE!";
      } else if (choice1 === computerChoice && choice2 === playerChoice) {
        winner.innerText = "LOST THIS ONE";
      }
    }

    compare1();

    function compare2() {
      let choice1 = "paper";
      let choice2 = "rock";
      if (choice1 === playerChoice && choice2 === computerChoice) {
        winner.innerText = "WON THIS ONE!";
      } else if (choice1 === computerChoice && choice2 === playerChoice) {
        winner.innerText = "LOST THIS ONE";
      }
    }

    compare2();

    if (playerChoice === computerChoice) {
      winner.innerText = "DREW THIS ONE";
    }

    const win = document.createElement("div");
    win.className = "checkClass";
    const lost = document.createElement("div");
    lost.className = "xClass";
    if (winner.innerText === "WON THIS ONE!") {
      scoreBoards.append(win);
    } else if (winner.innerText === "LOST THIS ONE") {
      scoreBoards.append(lost);
    } else {
      return;
    }

    let arr = Array.from(scoreBoards.children);


    if (scoreBoards.childElementCount === 2) {

      if (
        arr[0].className === "checkClass" && arr[1].className === "checkClass"
        ) {
        setTimeout(() => {
            gameOver.classList.add("show");
            gameOverH1.innerText = "CONGRATS! YOU WIN!!"
            tryAgainBtn.innerText = "GO AGAIN"
            gameOverH1.classList.add("blinking");
            containerBody.classList.add("userSelect");
        }, 1600);
      }
      else if(
        arr[0].className === "xClass" && arr[1].className === "xClass"
      ) {
        setTimeout(() => {
            gameOver.classList.add("show");
            gameOverH1.innerText = "SORRY YOU LOSE"
            tryAgainBtn.innerText = "TRY AGAIN"
            containerBody.classList.add("userSelect");
        }, 2000);
      }

    }
    else if (scoreBoards.childElementCount === 3) {

      if (
        arr[0].className === "checkClass" && arr[2].className === "checkClass" ||
        arr[1].className === "checkClass" && arr[2].className === "checkClass"
        ) {
        setTimeout(() => {
            gameOver.classList.add("show");
            gameOverH1.innerText = "CONGRATS! YOU WIN!!"
            tryAgainBtn.innerText = "GO AGAIN"
            gameOverH1.classList.add("blinking");
            containerBody.classList.add("userSelect");
        }, 2000);
      }
      else if(
        arr[0].className === "xClass" && arr[2].className === "xClass" ||
        arr[1].className === "xClass" && arr[2].className === "xClass"
      ) {
        setTimeout(() => {
            gameOver.classList.add("show");
            gameOverH1.innerText = "SORRY YOU LOSE"
            tryAgainBtn.innerText = "TRY AGAIN"
            containerBody.classList.add("userSelect");
        }, 2000);
      }

    }

    instruct.classList.remove("blinking");

    playAgainBtns.forEach(playAgainBtn => {
      playAgainBtn.addEventListener("click", ()=>{
        arr = [];
        while (scoreBoards.firstChild) {
          scoreBoards.removeChild(scoreBoards.firstChild);
        }
        gameOver.classList.remove("show");
        containerBody.classList.remove("userSelect");
        winner.innerText = "GOOD LUCK!"
        gameOverH1.classList.remove("blinking");
      })
    })
  });
});

rulesBtn.addEventListener("click", ()=>{
  rulesPopUp.classList.add("show");
  rulesOkayBtn.addEventListener("click", ()=>{
    rulesPopUp.classList.remove("show");
  });
});








