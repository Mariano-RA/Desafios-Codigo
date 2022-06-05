function queensAttack() {


  class pareja {
    constructor(r_q, columna) {
      this.r_q = r_q;
      this.columna = columna;
    }
  }

  function movimientoValido(x, y, n) {
    if (x > 0 && x <= n && y > 0 && y <= n) {
      return true;
    }
  }

  function contarMovimiento(n, x, y, xdiag, ydiag, map) {
    let cantMovimientos = 0;
    // !mp.has(new pair(x, y))) 
    while (movimientoValido(x, y, n) && !map.has(new pareja(x,y))) {
      x += xdiag;
      y += ydiag;
      cantMovimientos++;
    }

    return cantMovimientos;
  }


  function movimientosReina(n, nt, r_q,c_q, obstacles){
    let posXObs = 0;
    let posYObs = 0;
    let cantMovimientos = 0;
    
    while(nt > 0){
      nt--;
      posXObs = obstacles[0]
      posYObs = obstacles[1]
      tablero.set(new pareja(posXObs,posYObs),1);     
    }
    cantMovimientos += contarMovimiento(n, r_q + 1, c_q, 1, 0, tablero);
    cantMovimientos += contarMovimiento(n, r_q - 1, c_q, -1, 0, tablero);
    cantMovimientos += contarMovimiento(n, r_q, c_q + 1, 0, +1, tablero);
    cantMovimientos += contarMovimiento(n, r_q, c_q - 1, 0, -1, tablero);
    cantMovimientos += contarMovimiento(n, r_q + 1, c_q + 1, 1, 1, tablero);
    cantMovimientos += contarMovimiento(n, r_q + 1, c_q - 1, 1, -1, tablero);
    cantMovimientos += contarMovimiento(n, r_q - 1, c_q - 1, -1, -1, tablero);
    cantMovimientos += contarMovimiento(n, r_q - 1, c_q + 1, -1, +1, tablero);

    return cantMovimientos;
  }


  let n = 4;
  let nt = 1;
  let r_q = 4;
  let c_q = 4;
  let obstacles = [3, 5];
  let tablero = new Map();

  // console.log(movimientosReina(n,nt,r_q,c_q,obstacles))
  console.log(tablero)
}
queensAttack()
