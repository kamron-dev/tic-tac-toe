//Initializing gameboard and player function (module and a factory respectively)

const gameBoard = (() => {
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

    // functions to use inside of the game "switchPLayer" and "checkWin"
    const switchPlayer = () => {
        currentPlayer === player1 ? currentPlayer = player2 : currentPlayer === player2 ? currentPlayer = player1 : null;
    }

    const checkWin = (currentPlayer) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
            [0, 4, 8], [2, 4, 6] // diagonal
        
        ]
        return winningCombinations.some(combination => {
            return combination.every(index => gameBoard.board[index] === currentPlayer.sign);
        });
    }
    
    // Creating a function to render the board contents to the gameBoardDiv
    gameBoard.board.forEach((element, index) => {
        const gameButton = document.createElement("button");
        gameButton.classList.add("cell");
        gameButton.innerHTML = element;
        gameBoardDiv.appendChild(gameButton);
    
    // Adding event listeners to the buttons that push their sign into the gameBoard
        gameButton.addEventListener("click", function hanldeButtons(e) {
            e.target.innerHTML = currentPlayer.sign;
            gameBoard.board[index] = currentPlayer.sign;
            gameButton.setAttribute("disabled", "");
            if (checkWin(currentPlayer)) return console.log(`${currentPlayer.name} won the game!`)
            
            //checkWin(); TO DO!!
            //checkDraw(); TO DO!!
            switchPlayer();
            
        })
        
    });

    
    
})();






