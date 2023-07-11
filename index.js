//Initializing gameboard and player function (module and a factory respectively)

const gameBoard = (() => {
    // let board = ["X", "X", "O", "O", "X", "X", "O", "O", "X"];
    let board = ["", "", "", "", "", "", "", "", ""];

    return {board}
})();

const createPlayer = (name, sign) => {
    
    return { name, sign }
};

// Initializing players through player factory function

const player1 = createPlayer("Sam", "X");
const player2 = createPlayer("Jimmy Neutron", "O");

const renderGame = (() => {
    // Initializing the gameBoardDiv
    const gameBoardDiv = document.querySelector("#gameBoardDiv");
    let currentPlayer = player1;

    const switchPlayer = () => {
        currentPlayer === player1 ? currentPlayer = player2 : currentPlayer === player2 ? currentPlayer = player1 : null;
    }
    
    // Creating a function to render the board contents to the gameBoardDiv
    gameBoard.board.forEach((element, index) => {
        const gameButton = document.createElement("button");
        gameButton.classList.add("cell")
        gameButton.innerHTML = element;
        gameBoardDiv.appendChild(gameButton);

        gameButton.addEventListener("click", (e) => {
            e.target.innerHTML = currentPlayer.sign;
            gameBoard.board[index] = currentPlayer.sign;
            switchPlayer();
            
            //checkWin(); TO DO!!
        })
    });

    
    
})();






