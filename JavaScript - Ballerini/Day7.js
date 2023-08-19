function soma(a,b) {
    return Number(a)+Number(b)
}

function subtracao(a,b) {
    return Number(a)-Number(b)
}

function multiplica(a,b) {
    return Number(a)*Number(b)
}

function divide(a,b) {
    return Number(a)/Number(b)
}

function sair() {
    alert("Até a próxima") 
}

let valor1;
let valor2;
let operacao = "";

do {  
    operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);	
    while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair") {  //enquanto o texto lido for diferente de "soma", "subtração", "multiplicação", "divisão" e "sair", exibir que não foi reconhecido e perguntar novamente
	alert(`Operação não reconhecida!`);
	operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }
	
    if (operacao === "sair"){  //se o texto lido for "sair", sair do loop e da calculadora
		break;	
    }
	
    valor1 = prompt(`Insira o primeiro valor:`);
    valor2 = prompt(`Insira o segundo valor:`);
    switch (operacao) {
        case 'soma':
          alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplica(valor1, valor2)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divide(valor1, valor2)}`);
            break;
    }
} 
while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")

sair();