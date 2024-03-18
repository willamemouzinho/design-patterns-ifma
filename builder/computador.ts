class Computador {
	public cpu = ''
	public memoriaRam = ''
	public placaVideo = ''
	public armazenamento = ''

	descrever() {
		const computador = {
			cpu: this.cpu,
			memoriaRam: this.memoriaRam,
			placaVideo: this.placaVideo,
			armazenamento: this.armazenamento,
		}

		return computador
	}
}

interface ComputadorBuilder {
	definirCpu(cpu: string): this
	definirMemoriaRam(mamemoriaRam: string): this
	definirPlacaVideo(placaVideo: string): this
	definirArmazenamento(armazenamento: string): this

	construir(): Computador
}

class ComputadorConcreteBuilder implements ComputadorBuilder {
	private computador: Computador

	constructor() {
		this.computador = new Computador()
	}

	public definirCpu(cpu: string): this {
		this.computador.cpu = cpu
		return this
	}

	public definirMemoriaRam(memoriaRam: string): this {
		this.computador.memoriaRam = memoriaRam
		return this
	}

	public definirArmazenamento(armazenamento: string): this {
		this.computador.armazenamento = armazenamento
		return this
	}

	public definirPlacaVideo(placaVideo: string): this {
		this.computador.placaVideo = placaVideo
		return this
	}

	public construir(): Computador {
		return this.computador
	}
}

const meuComputador = new ComputadorConcreteBuilder()
	.definirCpu('Itel Core i5-1135G')
	.definirMemoriaRam('12 GB')
	.definirPlacaVideo('GTX')
	.definirArmazenamento('SSD 480 GB')

console.log(meuComputador.construir())
