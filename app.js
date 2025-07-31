alert('Boas vindas ao jogo do número secreto');
//let secretNumber = parseInt(Math.random() * 100 + 1);
let maximumNumber = 100;
let secretNumber= parseInt(Math.random() * maximumNumber + 1);
let guess;
let attempt = 1;


// Enquanto o chute não foi igual ao número secreto
while (guess != secretNumber) {
    guess = parseInt(prompt(`Escolha um número entre 1 e ${maximumNumber}`));
    // Se o chute for igual ao número secreto    
    if (guess == secretNumber) {
        break;
    } else {
        if (guess > secretNumber) {
            alert(`O número secreto é menor que ${guess}.`);
        } else {
            alert(`O número secreto é maior que ${guess}.`);
        }
       attempt++
    }
}

let wordAttempt = attempt > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${secretNumber} com ${attempt} ${wordAttempt}.`);

/* if (gues > 1){
alert(`Isso ai! Você descobriu o número secreto ${secretNumber} com ${attempt} tentativa.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${secretNumber} com ${attempt} tentativas.`);
} */

