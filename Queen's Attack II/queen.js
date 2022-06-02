// Function Description

// Complete the queensAttack function in the editor below.

// queensAttack has the following parameters:
// - int n: the number of rows and columns in the board
// - nt k: the number of obstacles on the board
// - int r_q: the row number of the queen's position
// - int c_q: the column number of the queen's position
// - int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle

function queensAttack(){
    let n = 4;
    let nt = 0;
    let r_q = 4;
    let c_q = 4;
    // let obstacles = [1,2];

    // The first line contains two space-separated integers  and , the length of the board's sides and the number of obstacles.
    // The next line contains two space-separated integers  and , the queen's row and column position.
    // Each of the next  lines contains two space-separated integers  and , the row and column position of .

    r_q--;
    c_q--;

    let tablero = new Array(n).fill(null).map(() => new Array(n).fill(0));
    tablero[r_q][c_q] = 1;
    
    console.log(tablero)

    for(let i=0;i <tablero.length; i++){
        for(let k=0;k < tablero[i].length;k++)
        tablero[]
    }
}

queensAttack()