function queensAttack() {
  let n = 5;
  let nt = 1;
  let r_q = 3;
  let c_q = 2;
  let obstacles = [2, 3];

  // The first line contains two space-separated integers  and , the length of the board's sides and the number of obstacles.
  // The next line contains two space-separated integers  and , the queen's row and column position.
  // Each of the next  lines contains two space-separated integers  and , the row and column position of .

  let diagonal = 1;
  r_q--;
  c_q--;
  let obstaculo = false;
  let tablero = new Array(n).fill(null).map(() => new Array(n).fill(0));

  tablero[obstacles.slice(0, 1) - 1][obstacles.slice(1, 2) - 1] = 4;
  tablero[r_q][c_q] = 3;

  

  tablero.reverse();
  console.log(tablero)

}

queensAttack();
