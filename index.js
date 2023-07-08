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

// Creating a function to render the board to the page

