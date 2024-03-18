class Carro {
	public modelo = ''
	public cor = ''
	public tamanhoMotor = ''
	public tipoTransmissao = ''

	descrever() {
		const carro = {
			modelo: this.modelo,
			cor: this.cor,
			tamanhoMotor: this.tamanhoMotor,
			tipoTransmissao: this.tipoTransmissao,
		}

		return carro
	}
}

interface CarroBuilder {
	definirModelo(modelo: string): this
	definirCor(cor: string): this
	definirTamanhoMotor(tamanhoMotor: string): this
	definirTipoTransmissao(tipoTransmissao: string): this

	construir(): Carro
}

class CarroConcreteBuilder implements CarroBuilder {
	private carro: Carro

	constructor() {
		this.carro = new Carro()
	}

	public definirModelo(modelo: string): this {
		this.carro.modelo = modelo
		return this
	}

	public definirCor(cor: string): this {
		this.carro.cor = cor
		return this
	}

	public definirTamanhoMotor(tamanhoMotor: string): this {
		this.carro.tamanhoMotor = tamanhoMotor
		return this
	}

	public definirTipoTransmissao(tipoTransmissao: string): this {
		this.carro.tipoTransmissao = tipoTransmissao
		return this
	}

	public construir(): Carro {
		return this.carro
	}
}

const toyota = new CarroConcreteBuilder()
	.definirModelo('Corolla')
	.definirCor('Preto')
	.definirTamanhoMotor('V-8')
	.definirTipoTransmissao('kjashdjka')

console.log(toyota.construir().descrever())
