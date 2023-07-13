//Initializing gameboard and player function (module and a factory respectively)

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    return {board}
})();

const createPlayer = (name, sign) => {
    
    return { name, sign }
};

// Initializing players through player factory function

const player1 = createPlayer("Player 1", "X");
const player2 = createPlayer("Player 2", "O");

const renderGame = (() => {
    // Initializing the gameBoardDiv
    const gameBoardDiv = document.querySelector("#gameBoardDiv");
    const display = document.querySelector("#display");
    let currentPlayer = player1;
    const restartGameBtn = document.querySelector("#restartGame")
    
    
    // functions to use inside of the game "switchPLayer" and "checkWin"
    const switchPlayer = () => {
        currentPlayer === player1 ? currentPlayer = player2 : currentPlayer === player2 ? currentPlayer = player1 : null;
    };

    const checkWin = (currentPlayer) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
            [0, 4, 8], [2, 4, 6] // diagonal
        
        ]
        return winningCombinations.some(combination => {
            return combination.every(index => gameBoard.board[index] === currentPlayer.sign);
        });
    };

    const checkDraw = () => {

        return gameBoard.board.every(cell => cell !== "");
    };

    const endGame = (currentPlayer) => {
        const allButtons = document.querySelectorAll(".cell");
        allButtons.forEach(button => button.setAttribute("disabled", ""));
        display.innerHTML = `${currentPlayer.name} won the game!`;
    };
    
    // Creating a function to render the board content to the gameBoardDiv
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
            if (checkWin(currentPlayer)) return endGame(currentPlayer);
            if (checkDraw()) return display.innerHTML = "It is a tie!";
            switchPlayer();
            
        })
        
    });

    restartGameBtn.addEventListener("click", () => {
        gameBoard.board = ["", "", "", "", "", "", "", "", ""];
        const allButtons = document.querySelectorAll(".cell");
        allButtons.forEach(button => {
            button.innerHTML = "";
            button.removeAttribute("disabled", "");
        });
        currentPlayer = player1;
        display.innerHTML = "Let the best player win!";
    });
    
})();






