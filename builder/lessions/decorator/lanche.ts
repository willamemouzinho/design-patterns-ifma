interface Lanche {
	obterPreco(): number
	obterDescricao(): string
}

class XSalada implements Lanche {
	obterPreco() {
		return 5
	}
	obterDescricao() {
		return 'X-Salada'
	}
}
class CachorroQuente implements Lanche {
	public preco: number
	public descricao: string

	constructor() {
		this.preco = 6
		this.descricao = 'Cachorro-quente'
	}
	obterPreco() {
		return this.preco
	}
	obterDescricao() {
		return this.descricao
	}
}

abstract class LancheDecorator implements Lanche {
	constructor(protected lanche: Lanche) {}

	obterPreco(): number {
		return this.lanche.obterPreco() + 9
	}
	obterDescricao(): string {
		return `${this.lanche.obterDescricao()}, gourmet`
	}
}

class XSaladaVegano extends LancheDecorator {
	obterPreco(): number {
		return this.lanche.obterPreco() + 7
	}

	obterDescricao(): string {
		return `${this.lanche.obterDescricao()}- vegano`
	}
}

class XSaladaGourmet extends LancheDecorator {
	obterPreco(): number {
		return this.lanche.obterPreco() + 9
	}

	obterDescricao(): string {
		return `${this.lanche.obterDescricao()}- gourmet`
	}
}

let xSalada: XSalada = new XSalada()
console.log(xSalada.obterDescricao())
console.log(xSalada.obterPreco())

const xSaladaGourmet = new XSaladaGourmet(xSalada)
console.log(xSaladaGourmet.obterDescricao())
console.log(xSaladaGourmet.obterPreco())

xSalada = new XSaladaGourmet(xSalada)
console.log(xSalada.obterDescricao())
console.log(xSalada.obterPreco())
