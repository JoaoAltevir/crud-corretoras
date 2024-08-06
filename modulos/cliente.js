const prompt = require('prompt-sync')();

const DB = [];

let proxID = 1;

const model = (id = proxID++) => {
    const nome = prompt("Informe o nome do cliente: ")
    if(nome == ""){
        console.log("Nome não pode estar vazio!")
        return false 
    }
    return {
        nome,
        id,
    }
}

const store = () => {
    if(novo){
        const novo = model();
        DB.push(novo)
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
        Nome: ${element.nome}
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