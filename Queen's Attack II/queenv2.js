function queensAttack() {
  let n = 100000;
  let k = 3;
  let r_q = 4187;
  let c_q = 5068;
  let obstacles = [
    [5, 5],
    [4, 2],
    [2, 3],
  ];

  r_q--;
  c_q--;

  let tablero = Array.from({ length: n }, () => new Array(n).fill(0));
  console.log(tablero)

  function validarMovimiento(fila, columna, largo) {
    if (fila >= 0 && fila < largo && columna >= 0 && columna < largo) {
      return true;
    }
  }

  if (k > 0) {
    for (let [r, c] of obstacles) {
      tablero[r - 1][c - 1] = 2;
    }
  }

  if (validarMovimiento(r_q, c_q, n)) {
    tablero[r_q][c_q] = 3;
  }

  let banderaArriba = false;
  let banderaAbajo = false;
  let banderaDerecha = false;
  let banderaIzquierda = false;
  let banderaDerechaArriba = false;
  let banderaDerechaAbajo = false;
  let banderaIzquierdaArriba = false;
  let banderaIzquierdaAbajo = false;

  let movimientos = 0;

  for (let i = 1; i < n; i++) {
    if (validarMovimiento(r_q + i, c_q, n) && banderaArriba == false) {
      if (tablero[r_q + i][c_q] == 2) {
        banderaArriba = true;
      } else {
        tablero[r_q + i][c_q] = 1;
      }
    }

    if (validarMovimiento(r_q - i, c_q, n) && banderaAbajo == false) {
      if (tablero[r_q - i][c_q] == 2) {
        banderaAbajo = true;
      } else {
        tablero[r_q - i][c_q] = 1;
      }
    }
    if (validarMovimiento(r_q, c_q + i, n) && banderaDerecha == false) {
      if (tablero[r_q][c_q + i] == 2) {
        banderaDerecha = true;
      } else {
        tablero[r_q][c_q + i] = 1;
      }
    }
    if (validarMovimiento(r_q, c_q - i, n) && banderaIzquierda == false) {
      if (tablero[r_q][c_q - i] == 2) {
        banderaIzquierda = true;
      } else {
        tablero[r_q][c_q - i] = 1;
      }
    }
    if (
      validarMovimiento(r_q + i, c_q + i, n) &&
      banderaDerechaArriba == false
    ) {
      if (tablero[r_q + i][c_q + i] == 2) {
        banderaDerechaArriba = true;
      } else {
        tablero[r_q + i][c_q + i] = 1;
      }
    }
    if (
      validarMovimiento(r_q + i, c_q + i, n) &&
      banderaDerechaArriba == false
    ) {
      if (tablero[r_q + i][c_q + i] == 2) {
        banderaDerechaArriba = true;
      } else {
        tablero[r_q + i][c_q + i] = 1;
      }
    }
    if (
      validarMovimiento(r_q - i, c_q + i, n) &&
      banderaDerechaAbajo == false
    ) {
      if (tablero[r_q - i][c_q + i] == 2) {
        banderaDerechaAbajo = true;
      } else {
        tablero[r_q - i][c_q + i] = 1;
      }
    }
    if (
      validarMovimiento(r_q - i, c_q + i, n) &&
      banderaDerechaAbajo == false
    ) {
      if (tablero[r_q - i][c_q + i] == 2) {
        banderaDerechaAbajo = true;
      } else {
        tablero[r_q - i][c_q + i] = 1;
      }
    }
    if (
      validarMovimiento(r_q + i, c_q - i, n) &&
      banderaIzquierdaArriba == false
    ) {
      if (tablero[r_q + i][c_q - i] == 2) {
        banderaIzquierdaArriba = true;
      } else {
        tablero[r_q + i][c_q - i] = 1;
      }
    }
    if (
      validarMovimiento(r_q - i, c_q - i, n) &&
      banderaIzquierdaAbajo == false
    ) {
      if (tablero[r_q - i][c_q - i] == 2) {
        banderaIzquierdaAbajo = true;
      } else {
        tablero[r_q - i][c_q - i] = 1;
      }
    }
  }

  for (let [r, c] of tablero) {
    if(tablero[r][c] == 1){
      movimientos += 1;
    }
  }

  return movimientos;
}

queensAttack();
