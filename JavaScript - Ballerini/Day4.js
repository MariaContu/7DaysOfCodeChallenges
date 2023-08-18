const numAleatorio = Math.floor(Math.random() * 10) + 1
const tentativas = 3;
let acertou=false;

for (let i = 0; i < 3; i++) {
    let chute = prompt("Qual numero deseja chutar?")
    
    if (chute==numAleatorio) {
        alert("Parabens, você acertou!")
        acertou=true
        break;
    }
    else {
        tentativas--;
        alert(`Ah não, número errado. Voce tem mais ${tentativas} chances.`)
    }
}

if (!acertou) {
    alert(`Parece que voce não adivinhou o número, que pena. O numero era: ${numAleatorio}`)
}
