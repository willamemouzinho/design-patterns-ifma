// enum Categoria2 {
// 	entrada = 'entrada',
// 	pratoPrincipal = 'prato principal',
// 	sobremesa = 'sobremesa',
// }
type Categoria2 = 'entrada' | 'prato principal' | 'sobremesa'
interface Prato2 {
	nome: string
	preco: number
	categoria: Categoria2
}

interface MenuBuilder2 {
	cadastraEntrada(prato: Prato2): this
	cadastraPratoPrincipal(prato: Prato2): this
	cadastraSobremesa(prato: Prato2): this
}

class Menu2 {
	public entradas: Prato2[] = []
	public pratosPrincipais: Prato2[] = []
	public sobremesas: Prato2[] = []

	public listaMenu() {
		const menu = {
			entradas: this.entradas,
			pratosPrincipais: this.pratosPrincipais,
			sobremesas: this.sobremesas,
		}
		return menu
	}
}

class MenuConcreteBuilder2 implements MenuBuilder2 {
	private menu: Menu2

	constructor() {
		this.menu = new Menu2()
	}

	public reset(): void {
		this.menu = new Menu2()
	}

	public cadastraEntrada(prato: Prato2): this {
		this.menu.entradas.push(prato)
		return this
	}

	public cadastraPratoPrincipal(prato: Prato2): this {
		this.menu.pratosPrincipais.push(prato)
		return this
	}

	public cadastraSobremesa(prato: Prato2): this {
		this.menu.sobremesas.push(prato)
		return this
	}

	public obtemMenu(): Menu2 {
		const menu = this.menu
		this.reset()
		return menu
	}
}

const menu2 = new MenuConcreteBuilder2()
const entrada2: Prato2 = {
	categoria: 'entrada',
	nome: 'salada',
	preco: 23,
}
menu2
	.cadastraEntrada(entrada2)
	.cadastraEntrada(entrada2)
	.cadastraSobremesa(entrada2)

console.log('Menu:')
const listaDePratos = menu2.obtemMenu()
console.log(listaDePratos.listaMenu())
