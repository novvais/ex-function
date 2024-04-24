const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor) {
        valor /= 100
        this.saldo += valor

        this.historicos.push({
            Tipo: "Depósito",
            Valor: valor
        })

        return (`\nDeposito de R$${valor} realizado para o cliente: ${this.nome}`);
    },
    sacar: function(valor) {
        valor /= 100

        if (valor > this.saldo) {
            return (`\n\nSaque de R$${valor} foi negado por saldo insuficiente do cliente: ${this.nome}`);
        }

        this.saldo -= valor

        this.historicos.push({
                Tipo: "Depósito",
                Valor: valor
        })

        return (`\nSaque de R$${valor} realizado para o cliente: ${this.nome}`);
    },
    extrato: function() {
        let resumoExtrato = (`\n\nExtrato de ${this.nome} - Saldo: R$${this.saldo}\nHistotico:\n`)


        for (const i of this.historicos) {
            resumoExtrato += (`\n${i.Tipo} de R$${i.Valor}`)
        }
        return resumoExtrato
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());