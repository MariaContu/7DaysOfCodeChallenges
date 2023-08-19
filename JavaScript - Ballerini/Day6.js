let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let comida=""
let categ=""
let remov="";

const resposta=prompt("Deseja adicionar uma comida na sua lista de compras? (Sim/Nao) ou 'remover' para remover um item");
while (resposta.toUpperCase()!='NAO') {
    if (resposta.toUpperCase() =='SIM') {
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
    }
    else if(resposta.toUpperCase=='REMOVER')   {
        alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)
    
        remov=prompt("Qual item deseja remover?")
        if (frutas.indexOf(remov)!= -1) {
            frutas.splice(frutas.indexOf(remov),1)
        }
        else if (laticinios.indexOf(remov)!=-1) {
            laticinios.splice(laticinios.indexOf(remov),1)
        }
        else if (congelados.indexOf(remov)!=-1) {
            congelados.splice(congelados.indexOf(remov),1)
        }
        else if (doces.indexOf(remov)!=-1)  {
            doces.splice(doces.indexOf(remov),1)
        }
        else alert("Item não encontrado")
    }
    resposta=prompt("Deseja adicionar uma comida na sua lista de compras? (Sim/Nao)");
}

//imprimir lista
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)