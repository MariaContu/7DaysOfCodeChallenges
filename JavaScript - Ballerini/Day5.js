let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let comida=""
let categ=""

const resposta=prompt("Deseja adicionar uma comida na sua lista de compras? (Sim/Nao)");
while (resposta.toUpperCase()=='SIM') {
    comida=prompt("Qual comida deseja inserir?")
    categ=prompt("Em qual categoria essa comida se encaixa? (frutas/laticinios/congelados/doces)")

    switch (categ.toLowerCase()) {
        case frutas:
            frutas.push(comida);
            break;
        case laticinios:
            laticinios.push(comida);
            break;
        case congelados:
            congelados.push(comida);
            break;
        case doces:
            doces.push(comida);
            break;
        default:
            alert("Categoria invalida!")
            break;
    }
    resposta=prompt("Deseja adicionar uma comida na sua lista de compras? (Sim/Nao)");
}

//imprimir lista
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)