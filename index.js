//Initializing gameboard and player function (module and a factory respectively)

const gameBoard = (() => {
    let board = ["X", "X", "O", "O", "X", "X", "O", "O", "X"];
    //let board = ["", "", "", "", "", "", "", "", ""];

    return {board}
})();

const createPlayer = (name, sign) => {
    
    return { name, sign }
};

// Initializing players through player factory function

const player1 = createPlayer("Sam", "X");
const player2 = createPlayer("Jimmy Neutron", "O");

// Initializing the gameBoardDiv

const gameBoardDiv = document.querySelector("#gameBoardDiv");

// Creating a function to render the board contents to the gameBoardDiv
gameBoard.board.forEach(element => {
    const gameButton = document.createElement("button");
    gameButton.classList.add("cell")
    gameButton.innerHTML = element;
    gameBoardDiv.appendChild(gameButton);
})

// const spots = Array.from(document.getElementsByClassName("cell"))



