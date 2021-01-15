// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

function isSolved(board) {
    board = board.join('-').replace(/,/g, '');
    if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if (/0/.test(board)) return -1;
    return 0;
}

function isSolved(board) {
    let s = checkForWin(board);
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].join``;
    }
    if (s.some((x) => x === '111')) return 1;
    if (s.some((x) => x === '222')) return 2;
    if (s.some((x) => x.includes('0'))) return -1;
    return 0;
}

function checkForWin(board) {
    let arr = [];
    board.forEach((x) => {
        return arr.push(x);
    });
    let horiz = [];
    board.forEach((x, idx) => {
        horiz.push(board[0][idx]);
        horiz.push(board[1][idx]);
        horiz.push(board[2][idx]);
    });
    while (horiz.length) {
        arr.push(horiz.splice(0, 3));
    }
    let x1 = [];
    let x2 = [];
    for (let i = 0, j = board.length - 1; i < board.length; i++) {
        x1.push(board[i][i]);
        x2.push(board[j][j--]);
    }
    arr.push(x1);
    arr.push(x2);
    return arr;
}

function isSolved(board) {
  var row = board;
  var col = [0,1,2].map((i) => [0,1,2].map((h)=>board[h][i]));
  var di1 = [[0,1,2].map((i) => board[i][i])];
  var di2 = [[0,1,2].map((i) => board.reverse()[i][i])];
  var all = row.concat(col,di1,di2);
  if (all.some(x=>""+x=="1,1,1")){return 1;}
  else if (all.some(x=>""+x=="2,2,2")){return 2;}
  else if (all.some(x => x.includes(0))){return -1;}
  else{return 0;};
}
