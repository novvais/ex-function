const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo: function () {
    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log(`Total de itens: ${this.calcularTotaldeItens()}`);
    console.log(`Total a pagar: R$${this.calcularTotalaPagar().toFixed(2)},\n`);
  },
  addProduto: function (produto) {
    let indiceProduto = -1;

    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].id === produto.id) {
        indiceProduto = i;
        break;
      }
    }

    if (indiceProduto === -1) {
      this.produtos.push(produto);
    } else {
      this.produtos[indiceProduto].qtd += produto.qtd;
    }
  },
  imprimirDetalhes: function () {
    console.log(`\nCliente: ${this.nomeDoCliente}\n`);

    for (let i = 0; i < this.produtos.length; i++) {
      let produto = this.produtos[i];

      console.log(
        `Item ${i + 1} - ${produto.nome} - ${produto.qtd} - R$${(
          produto.precoUnit / 100
        ).toFixed(2)}`
      );
    }

    console.log(`\nTotal de itens: ${this.calcularTotaldeItens()}`);
    console.log(`\nTotal a pagar: R$${this.calcularTotalaPagar().toFixed(2)}`);
  },
  calcularTotaldeItens: function () {
    let qtdTotal = 0;

    for (const produto of this.produtos) {
      qtdTotal += produto.qtd;
    }

    return qtdTotal;
  },
  calcularTotalaPagar: function () {
    let valorTotal = 0;

    for (const produto of this.produtos) {
      valorTotal += produto.qtd * produto.precoUnit;
    }

    return valorTotal;
  },
  calcularDesconto: function () {
    let qtdTotal = this.calcularTotaldeItens();
    let valorTotal = this.calcularTotalaPagar();

    let descontoPoritens = 0;

    if (qtdTotal >= 4) {
      descontoPoritens = this.produtos[0].precoUnit;

      for (let i = 1; i < this.produtos.length; i++) {
        if (this.produtos[i].precoUnit < descontoPoritens) {
          descontoPoritens = this.produtos[i].precoUnit;
        }
      }
    }

    let descontoTotalaPagar = 0;

    if (valorTotal > 10000) {
      descontoTotalaPagar = valorTotal * 0.1;
    }

    let melhorDesconto = 0;

    if (descontoPoritens > descontoTotalaPagar) {
      melhorDesconto = descontoPoritens;
      console.log(`O valor do desconto é R$${melhorDesconto / 100}`);
    } else {
      melhorDesconto = descontoTotalaPagar;
      console.log(`O valor do desconto é R$${melhorDesconto / 100}`);
    }
  },
};

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};
carrinho.addProduto(novaBermuda);

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};
carrinho.addProduto(novoTenis);

carrinho.imprimirResumo();
carrinho.imprimirDetalhes();

carrinho.calcularDesconto();
