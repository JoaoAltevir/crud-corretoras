const prompt = require('prompt-sync')();
const {listarCorretoras} = require('./corretora');

const DB = [];

let proxID = 1;

const model = (id = proxID++) => {
    const numero = parseInt(prompt("Informe o número do imóvel: "))
    const rua = prompt('Informe a rua do imóvel: ');
    const bairro = prompt('Informe o bairro do imóvel: ');
    let idCorretora = 0;
    if(listarCorretoras()){
        idCorretora = parseInt(prompt("Informe o id da corretora: "));
    }

    if(
        isNaN(numero) ||
        rua == "" ||
        bairro == "" ||
        idCorretora <= 0
    ){
        return false
    }
    return {
        numero,
        rua,
        bairro,
        idCorretora,
        id,
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
        Registro: ${element.id}
        Rua: ${element.rua}
        Bairro: ${element.bairro}
        Numero: ${element.numero}
        Corretora: ${element.idCorretora}
        `)
    })
    return true
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
    DB,
}
