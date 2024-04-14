class Carro {
  constructor(
    public marca: string,
    public modelo: string,
    public velocidade: number
  ) {
    this.marca = marca
    this.modelo = modelo
    this.velocidade = velocidade

    if (this.velocidade < 0)
      throw new Error('O valor da velocidade não pode ser um número negativo')
  }

  public acelerar() {
    return ++this.velocidade
  }

  public freiar() {
    return --this.velocidade
  }

  public mostrarVelocidadeAtual() {
    return this.velocidade
  }
}

const meuCarro = new Carro('Volkswagen', 'Taos', 100)

console.log('marca do carro: ', meuCarro.marca)
console.log('modelo do carro: ', meuCarro.modelo)
console.log('velocidade atual: ', meuCarro.mostrarVelocidadeAtual())
meuCarro.acelerar()
console.log('velocidade após acelerar: ', meuCarro.mostrarVelocidadeAtual())
meuCarro.freiar()
meuCarro.freiar()
console.log('velocidade após freiar: ', meuCarro.mostrarVelocidadeAtual())
