class ContaBancaria {
  constructor(
    public numeroConta: string,
    public nomeTitular: string,
    public saldoConta: number
  ) {
    this.numeroConta = numeroConta;
    this.nomeTitular = nomeTitular;
    this.saldoConta = saldoConta;
  }

  depositar(value: number) {
    this.saldoConta += value;
    return;
  }

  sacar(value: number) {
    this.saldoConta -= value;
    return;
  }
}

const minhaConta = new ContaBancaria("1234", "Willame M.", 850.0);

console.log("meu saldo inicial: ", minhaConta.saldoConta);
minhaConta.depositar(200);
console.log("meu saldo após depósito: ", minhaConta.saldoConta);
minhaConta.sacar(150);
console.log("meu saldo após saque: ", minhaConta.saldoConta);
