const prompt = require('prompt-sync')();
const {listarCorretoras} = require('../corretora.js');
const corretores = [];
let ultimoID = 1

const modelo = () => {
    let nome = prompt("Informe o nome do corretor: ");
    
    let idCorretora = 0;
    if(listarCorretoras()){
        idCorretora = +prompt("Informe o id da corretora que ele trabalha: ")
    }

    if(
        nome == "" &&
        idCorretora <= 0
    ){
        return false
    }

    return {
        nome,
        idCorretora,
    }

}

const criarCorretor = () => {
    const corretor = modelo();
    if(corretor){
        corretor.id = ultimoID;
        corretores.push(corretor);
        console.log("Cadastrado com sucesso!")
    }else{
        console.log("Dados inválidos!")
    }
}

const listarCorretores = () => {
    if(corretores.length == 0 ){
        console.log("Nenhum corretor cadastrado!")
    }else{
        corretores.forEach(corretor => {
        console.log(`
        Nome Corretor: ${corretor.nome}
        ID Corretora: ${corretor.idCorretora}
        ID Corretor: ${corretor.id}`)
        })
    }
}

const atualizarCorretores = () => {
    if(corretores.length == 0){
        console.log("Nenhum corretor cadastrado!")
        return
    }

    listarCorretores();

    const id = parseInt(prompt("Informe o id que deseja atualizar: "));

    const indice = corretores.findIndex(corretor => corretor.id == id);

    const novo = modelo();

    novo.id = id;

    corretores[indice] = novo;

    console.log("Registro atualizado com sucesso!")
}
const apagarCorretor = () => {
    if(corretores.length == 0 ){
        console.log("Nenhum corretor cadastrado!");
        return
    }
    listarCorretores();

    const id = parseInt(prompt("Informe o id que deseja apagar: "));
    const indice = corretores.findIndex(corretor => corretor.id == id);

    corretores.splice(indice, 1);
    
}
