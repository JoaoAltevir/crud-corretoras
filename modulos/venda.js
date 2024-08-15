const prompt = require('prompt-sync')();
const corretor = require('./corretor.js');
const cliente = require('./cliente.js');
const imovel = require('./imovel.js');

const DB = [];

let proxID = 1;

const model = (id = proxID++) => {
    let idCorretor = 0
    if(corretor.listarCorretores()){
        idCorretor = parseInt(prompt("Informe o id do corretor que realizou a venda: "));
    }
    const corretorAux = corretor.show(idCorretor)
    console.log(corretorAux)
    let idImovel = 0
    if(imovel.index()){
        idImovel = parseInt(prompt('Informe o id do móvel em que foi realizado a venda: '));
    }
    const imovelAux = imovel.show(idImovel);
    if(corretorAux.idCorretora != imovelAux.idCorretora){
        console.log("Este imóvel não está cadastrado na mesma corretora que o vendedor!")
        return false;
    }
    let idCliente = 0;
    if(cliente.index()){
        idCliente = parseInt(prompt("Informe o id do cliente: "));
    } 
    if(
        idCorretor <= 0 ||
        idImovel <= 0 ||
        idCliente <= 0
    ){
        return false
    }

    return {
        id,
        idImovel,
        idCorretor,
        idCliente,
    }
}

const store = () => {
    const novo = model();
    if(novo){
        DB.push(novo)
    }else{
        console.log("Dados inválidos!")
    }
}

const index = () => {
    if(DB.length == 0){
        console.log("Nenhum cliente cadastrado!");
        return false
    }
    DB.forEach(element => {
        console.log(`
        Venda: ${element.id}
        Imóvel: ${element.idImovel}
        Corretor: ${element.idCorretor} 
        Cliente: ${element.idCliente}
        `)
    })
}

const show = id => DB.find(el => el.id == id);

const update = () => {
    if(index()){
        const id = parseInt(prompt("Informe o registro que deseja alterar: "));
    
        const indice = DB.findIndex(element => element.id == id);
        if(indice != 1){   
            const novo = model(id);
                if(novo){
                DB[indice] = novo;
                return
            }
        }else{
            console.log("Indice não válido!")
        }
    
        console.log("Dados inválidos!");
        return
    }
}
const destroy = () => {
    if(index()){
        const id = parseInt(prompt("Informe o registro que deseja apagar: "));

        const indice = DB.findIndex(element => element.id == id);

        if(indice != 1){
            DB.splice(indice, 1);
            console.log('Registro apagado com sucesso!')
            return
        }
        console.log("Indice não é válido!");
        return
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
}