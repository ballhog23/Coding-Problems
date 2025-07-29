function solveTicTacToe(line1, line2, line3) {
  const args = arguments;
  let decision = 'Tie';

  rowCheck()
  columnCheck()
  diagonalCheck()

  function rowCheck() {
    for (const row of args) {
      const eval = row.every(index => index === 'XXX' || index === 'OOO')

      if (eval === true) decision = true;
    }
    return decision
  }

  function columnCheck() {
    const column1 = [`${line1[0][0]}${line2[0][0]}${line3[0][0]}`]
    const column2 = [`${line1[0][1]}${line2[0][1]}${line3[0][1]}`]
    const column3 = [`${line1[0][2]}${line2[0][2]}${line3[0][2]}`]
    const columns = [column1, column2, column3];

    for (let index = 0; index < 3; index++) {
      const column = columns[index];
      const eval = column.every(index => index === 'XXX' || index === 'OOO');
      if (eval === true) decision = true;
    }

    return decision;
  }

  function diagonalCheck() {
    const diagonal1 = [`${line1[0][0]}${line2[0][1]}${line3[0][2]}`]
    const diagonal2 = [`${line1[0][2]}${line2[0][1]}${line3[0][0]}`]
    const diagonals = [diagonal1, diagonal2];

    for (let i = 0; i < diagonals.length; i++) {
      const diagonal = diagonals[i];
      const eval = diagonal.every(i => i === 'XXX' || i === 'OOO');
      if (eval === true) decision = true;
    }

    return decision;
  }

  return decision;
}

function solveTicTacToe(line1, line2, line3) {
  const board = [line1[0], line2[0], line3[0]]; // Extract row strings from the arrays

  // Check rows
  for (const row of board) {
    if (row === 'XXX' || row === 'OOO') return true;
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    const col = board[0][i] + board[1][i] + board[2][i];
    console.log(col)
    if (col === 'XXX' || col === 'OOO') return true;
  }

  // Check diagonals
  const diag1 = board[0][0] + board[1][1] + board[2][2];
  const diag2 = board[0][2] + board[1][1] + board[2][0];
  if (diag1 === 'XXX' || diag1 === 'OOO' || diag2 === 'XXX' || diag2 === 'OOO') {
    return true;
  }

  return 'Tie';
}

// solveTicTacToe(
//   ['OXX'],
//   ['XOO'],
//   ['XOO']
// )

solveTicTacToe(
  ['OXO'],
  ['XOO'],
  ['XOX']
)

// solveTicTacToe(
//   ['XOX'],
//   ['XXX'],
//   ['OXO']
// )

// solveTicTacToe(
//   ['OXO'],
//   ['XOO'],
//   ['XOX']
// )

// solveTicTacToe(
//   ['O-X'],
//   ['-XO'],
//   ['OOX']
// )

// solveTicTacToe(
//   ['XXO'],
//   ['XOO'],
//   ['XOX']
// )

// solveTicTacToe(
//   ['-O-'],
//   ['-OX'],
//   ['-O-']
// )