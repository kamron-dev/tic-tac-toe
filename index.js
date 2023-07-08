//Initializing gameboard and player function (module and a factory respectively)

const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    return {board}
})();

const Player = (name, sign) => {
    
    return { name, sign }
};

// Initializing players through player factory function

const player1 = Player("Sam", "X");
const player2 = Player("Jimmy Neutron", "O");

console.log(player1, player2);