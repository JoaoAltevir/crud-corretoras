const prompt = require("prompt-sync")();
const corretora = require("./modulos/corretora.js")
const corretor = require("./modulos/corretor.js");
const clientes = require("./modulos/cliente.js");
const venda = require("./modulos/venda.js");
const imovel = require("./modulos/imovel.js");

const menuCorretora = () => {
  console.log(`
    GERENCIAMENTO DE CORRETORA
    `);
  while (true) {
    console.log(`
        [1]CADASTRAR CORRETORA
        [2]LISTAR CORRETORAS
        [3]ATUALIZAR CORRETORA
        [4]APAGAR CORRETORA
        [0]VOLTAR`);
    const opcao = parseInt(prompt(": "));
    switch (opcao) {
      case 1:
        corretora.criarCorretora();
        break;
      case 2:
        corretora.listarCorretoras();
        break;
      case 3:
        corretora.atualizarCorretora();
        break;
      case 4:
        corretora.apagarCorretora();
        break;
      case 0:
        return;
      default:
        console.log("Opção inválida!");
    }
  }
};
const menuCorretor = () => {
  console.log(`
      GERENCIAMENTO DE CORRETOR
      `);
  while (true) {
    console.log(`
          [1]CADASTRAR CORRETOR
          [2]LISTAR CORRETORES
          [3]ATUALIZAR CORRETOR
          [4]APAGAR CORRETOR
          [0]VOLTAR`);
    const opcao = parseInt(prompt(": "));
    switch (opcao) {
      case 1:
        corretor.criarCorretor();
        break;
      case 2:
        corretor.listarCorretores();
        break;
      case 3:
        corretor.atualizarCorretores();
        break;
      case 4:
        corretor.apagarCorretor();
        break;
      case 0:
        return;
      default:
        console.log("Opção inválida!");
    }
  }
};
const menuCliente = () => {
  console.log(`
      GERENCIAMENTO DE CLIENTES
      `);
  while (true) {
    console.log(`
          [1]CADASTRAR CLIENTE
          [2]LISTAR CLIENTES
          [3]ATUALIZAR CLIENTE
          [4]APAGAR CLIENTE
          [0]VOLTAR`);
    const opcao = parseInt(prompt(": "));
    switch (opcao) {
      case 1:
        clientes.store();
        break;
      case 2:
        clientes.index();
        break;
      case 3:
        clientes.update();
        break;
      case 4:
        clientes.destroy();
        break;
      case 0:
        return;
      default:
        console.log("Opção inválida!");
    }
  }
};
const menuVenda = () => {
  console.log(`
        GERENCIAMENTO DE VENDAS
        `);
  while (true) {
    console.log(`
            [1]CADASTRAR VENDA
            [2]LISTAR VENDAS
            [3]ATUALIZAR VENDA
            [4]APAGAR VENDA
            [0]VOLTAR`);
    const opcao = parseInt(prompt(": "));
    switch (opcao) {
      case 1:
        venda.store();
        break;
      case 2:
        venda.index();
        break;
      case 3:
        venda.update();
        break;
      case 4:
        venda.destroy();
        break;
      case 0:
        return;
      default:
        console.log("Opção inválida!");
    }
  }
};
const menuImovel = () => {
  console.log(`
        GERENCIAMENTO DE IMÓVEIS
        `);
  while (true) {
    console.log(`
            [1]CADASTRAR IMÓVEL
            [2]LISTAR IMÓVEIS
            [3]ATUALIZAR IMÓVEL
            [4]APAGAR IMÓVEL
            [0]VOLTAR`);
    const opcao = parseInt(prompt(": "));
    switch (opcao) {
      case 1:
        imovel.store();
        break;
      case 2:
        imovel.index();
        break;
      case 3:
        imovel.update();
        break;
      case 4:
        imovel.destroy();
        break;
      case 0:
        return;
      default:
        console.log("Opção inválida!");
    }
  }
};

const menuPrincipal = () => {
  console.log(`
    GERENCIAMENTO DE CORRETORA DE IMÓVEIS
    `);

  while (true) {
    console.log(`
        ESCOLHA A ÁREA QUE DESEJA GERENCIAR: 
        [1]CORRETORA
        [2]CORRETOR
        [3]CLIENTE
        [4]IMÓVEL
        [5]VENDAS
        [0]SAIR
        `);
    const opcaoModulo = parseInt(prompt(": "));

    switch (opcaoModulo) {
      case 1:
        menuCorretora();
        break;
      case 2:
        menuCorretor();
        break;
      case 3:
        menuCliente();
        break;
      case 4:
        menuImovel();
        break;
      case 5:
        menuVenda();
        break;
      case 0:
        process.exit();
        break;
      default:
        console.log("Opção inválida!");
    }
  }
};

menuPrincipal();
