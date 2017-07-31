// tic-tac-toe 

// ==== STRUCTURE ====
// What are the objects we use when we play tic-tac-toe? 
  // 3x3 board
  // player 1 = O
  // player 2 = X
// what are their relationships with each other?
  // each player takes turn to put down their hand on board 
// what are ther properties?

// what interactions they have with each other? 
  // to update board with moves:
    // as each player put down a play, 
    // the board should update UI to reflect current state
  // to detect winner: 
    // whichever symbol makes a connected 3 dots wins
    // whichever direction works: horizontal, vertical, diagonal 

class TicTacToe {
  constructor() {
    this.board = [];
  }
  
  createBoard() {
    for (var i = 0; i < 3; i++) {
      this.board.push([" ", " ", " "]);
    }
  }
  renderBoard() {

  }

  updateBoard() {

  }

  updateWinner() {

  }
}