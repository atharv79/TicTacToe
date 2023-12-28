 let boxes = document.querySelectorAll(".box");
 let resetButton = document.querySelector("#reset-button");
 let newGameButton = document.querySelector("#newGame-button");
 let msgContainer = document.querySelector(".msg-container");
 let msg = document.querySelector("#msg"); 

 let turnsX = true; //player A and B

 //Create 2D array to store the winning patterns in tic tac toe
    // let array2D = [
    //     ["apple", "litchi"], 
    //     ["potato", "tomato"], 
    //     ["pants", "shirts"]
    // ];
 const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
 ];

 let count = 0;
 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("BOX WAS CLICKED!");
        if(turnsX){
            box.innerText = "X";
            turnsX = false;
        }
        else{
            box.innerText = "O";
            turnsX = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkwinner();

        if(count === 9 && !isWinner){
            DrawCondition();
        }
    });
 });

 const DrawCondition = () => {
    msg.innerText = "MATCH IS DRAW!";
    msgContainer.classList.remove("hide");
    disableBoxes();
 };

 const resetGame = () => {
    turnsX = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
 };

 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 };

 const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
 };

 const showWinner = (pos1Value) => {
    msg.innerText = "Congratulations, Winner is " + pos1Value;
    msgContainer.classList.remove("hide");
    disableBoxes();
 };

 //pattern is a arrray
 const checkwinner = () => {

    for(let pattern of winningpattern){
        //for checking values in the boxes
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                console.log("Winner is ", pos1Value);
                showWinner(pos1Value);
                return true;
            }
        }
    }
 };
 
 newGameButton.addEventListener("click", resetGame);
 resetButton.addEventListener("click", resetGame);
 