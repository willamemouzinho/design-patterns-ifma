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

  acelerar() {
    return
  }
  freiar() {
    return
  }

  mostrarVelocidadeAtual() {
    return this.velocidade
  }
}

const meuCarro = new Carro('Volkswagen', 'Taos', 100)

console.log('marca do carro: ', meuCarro.marca)
console.log('modelo do carro: ', meuCarro.modelo)
console.log('Velocidade atual: ', meuCarro.mostrarVelocidadeAtual())
meuCarro.acelerar()
console.log('Velocidade após acelerar: ', meuCarro.mostrarVelocidadeAtual())
meuCarro.freiar()
console.log('Velocidade após freiar: ', meuCarro.mostrarVelocidadeAtual())
