class ContaBancaria {
  constructor(
    public numeroConta: string,
    public nomeTitular: string,
    public saldoConta: number
  ) {
    this.numeroConta = numeroConta
    this.nomeTitular = nomeTitular
    this.saldoConta = saldoConta
  }

  public depositar(value: number) {
    if (value < 0)
      throw new Error('O valor a ser depositado não pode ser negativo.')
    this.saldoConta += value
    return
  }

  public sacar(value: number) {
    if (value < 0)
      throw new Error('O valor a ser sacado não pode ser negativo.')
    this.saldoConta -= value
    return
  }
}

const minhaConta = new ContaBancaria('1234', 'Willame M.', 850.0)

console.log('nome do cliente: ', minhaConta.nomeTitular)
console.log('n° da conta: ', minhaConta.numeroConta)
console.log('meu saldo inicial: ', minhaConta.saldoConta)
minhaConta.depositar(200)
console.log('meu saldo após depósito: ', minhaConta.saldoConta)
minhaConta.sacar(150)
console.log('meu saldo após saque: ', minhaConta.saldoConta)
