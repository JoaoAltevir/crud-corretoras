const prompt = require("prompt-sync")();
const corretoras = [];
let ultimoID = 1;
const modelo = () => {
  while (true) {
    const nome = prompt("Informe o nome da corretora: ");
    if (nome == "") {
      console.log("Nome não pode estar vazio!");
    }
    return {
      nome,
    };
  }
};

const criarCorretora = () => {
  const corretora = modelo();
  corretora.id = ultimoID;
  ultimoID++;
  corretoras.push(corretora);
  console.log(corretoras.length);
  console.log("Corretora adicionada com sucesso!");
};

const listarCorretoras = () => {
  if (corretoras.length == 0) {
    console.log("Nenhuma corretora cadastrada!");
    return false;
  }
  corretoras.forEach((corretora) => {
    console.log(`
    Registro: ${corretora.id}
    Nome Corretora : ${corretora.nome}; 
        `);
    });
    return true;
};

const atualizarCorretora = () => {
  if (corretoras.length == 0) {
    console.log("Nenhuma corretora cadastrada!");
    return;
  }
  listarCorretoras();

  const id = parseInt(prompt("Informe o registro que deseja atualizar: "));

  const indice = corretoras.findIndex((corretora) => corretora.id == id);

  const novo = modelo();

  novo.id = id;

  corretoras[indice] = novo;

  console.log("Registro atualizado com sucesso!");
};

const apagarCorretora = () => {
  if (corretoras.length == 0) {
    console.log("Nenhuma corretora cadastrada!");
    return;
  }
  listarCorretoras();

  const id = parseInt(prompt("Informe o registro que deseja apagar: "));

  const indice = corretoras.findIndex((corretora) => corretora.id == id);

  corretoras.splice(indice, 1);

  console.log("Registro excluido com sucesso!");
};

module.exports = {
  criarCorretora,
  listarCorretoras,
  atualizarCorretora,
  apagarCorretora,
};
