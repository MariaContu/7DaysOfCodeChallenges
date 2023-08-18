const area = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End?");

let ling = "";

if (area.toUpperCase()=='FRONT-END') {
    ling = prompt("Gostaria de aprender React ou Vue?");

}
else if (area.toUpperCase()=='BACK-END') {
    ling=prompt("Gostaria de aprender C# ou Java?");
} 
else {
    alert("Voce inseriu uma área inválida.");
}

const espec = prompt("Digite 1 para seguir se especializando na area escolhida e 2 para seguir para o fullstack");
if (espec==1) {
    alert(`Siga se especializando em ${ling} para dominar a área ${area}`)
} 
else if (espec==2) {
    alert(`Se quer se tornar fullstack, esta na hora de aprender algo alem de ${ling}`)
}
else    {
    alert("Valor invalido")
}

let resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
while (resposta.toLowerCase()=='ok') {
    let novaTec = prompt("Qual?")
    alert(`${novaTec} é uma boa escolha!`)
    resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
}