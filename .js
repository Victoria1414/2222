const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
 });

function whoWins(N) {
 let stanTurn = true; // Вказує, чи хід Слави (true) або Олі (false)

    while (N >= 2) {
      if (stanTurn) {
        N = Math.ceil(N / 9); // Максимальне значення, на яке можна поділити
        } else {
        N = Math.ceil(N / 2); // Мінімальне значення, на яке можна поділити
        }
        stanTurn = !stanTurn; // Змінюємо чергу гравця
        }

      if (!stanTurn) {
        console.log("Stan wins.");
        } else {
        console.log("Ollie wins.");
    }
}

let lineNumber = 1;
rl.on('line', (input) => {
 if (lineNumber === 1) {
   const N = parseInt(input.trim(), 10);
    whoWins(N);
     rl.close();
    }
      lineNumber++;
});
