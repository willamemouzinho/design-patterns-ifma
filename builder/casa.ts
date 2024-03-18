class Casa {
	public qtdQuartos = 0
	public qtdBanheiros = 0
	public tamamhoSala = 0
	public estiloArquitetonico = ''

	public exibirInfo() {
		console.log(`
        Especificações da casa:
        numero de quartos: ${this.qtdQuartos}
        numero de banheiros: ${this.qtdBanheiros}
        tamanho da sala: ${this.tamamhoSala}
        estilo arquitetônico: ${this.estiloArquitetonico}
      `)
		const casa = {
			qtdQuartos: this.qtdQuartos,
			qtdBanheiros: this.qtdBanheiros,
			tamamhoSala: this.tamamhoSala,
			estiloArquitetonico: this.estiloArquitetonico,
		}

		return casa
	}
}

interface CasaBuilder {
	definirQtdQuartos(qtdQuartos: number): this
	definirQtdBanheiros(qtdBanheiros: number): this
	definirTamanhoSala(tamamhoSala: number): this
	definirEstiloArquitetonico(estiloArquitetonico: string): this
	construir(): Casa
}

class CasaConcreteBuilder implements CasaBuilder {
	private casa: Casa

	constructor() {
		this.casa = new Casa()
	}

	definirQtdQuartos(qtdQuartos: number): this {
		this.casa.qtdQuartos = qtdQuartos
		return this
	}

	definirQtdBanheiros(qtdBanheiros: number): this {
		this.casa.qtdBanheiros = qtdBanheiros
		return this
	}

	definirTamanhoSala(tamamhoSala: number): this {
		this.casa.tamamhoSala = tamamhoSala
		return this
	}

	definirEstiloArquitetonico(estiloArquitetonico: string): this {
		this.casa.estiloArquitetonico = estiloArquitetonico
		return this
	}

	construir() {
		return this.casa
	}
}

const casa1 = new CasaConcreteBuilder()
	.definirQtdQuartos(3)
	.definirQtdBanheiros(2)
	.definirTamanhoSala(120)
	.definirEstiloArquitetonico('simples')

console.log(casa1.construir())
