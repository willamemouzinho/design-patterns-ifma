class Pizza {
	public tipoMassa = ''
	public molho = ''
	public queijo = ''
	public coberturas: string[] = []

	descrever() {
		const pizza = {
			tipoMassa: this.tipoMassa,
			molho: this.molho,
			queijo: this.queijo,
			coberturas: this.coberturas,
		}

		return pizza
	}
}

interface PizzaBuilder {
	definirTipoMassa(tipoMassa: string): this
	definirMolho(molho: string): this
	definirQueijo(queijo: string): this
	definirCoberturas(coberturas: string[]): this

	construir(): Pizza
}

class PizzaConcreteBuilder implements PizzaBuilder {
	private pizza: Pizza

	constructor() {
		this.pizza = new Pizza()
	}

	public definirTipoMassa(tipoMassa: string): this {
		this.pizza.tipoMassa = tipoMassa
		return this
	}

	public definirMolho(molho: string): this {
		this.pizza.molho = molho
		return this
	}

	public definirQueijo(queijo: string): this {
		this.pizza.queijo = queijo
		return this
	}

	public definirCoberturas(coberturas: string[]): this {
		this.pizza.coberturas = [...coberturas]
		return this
	}

	public construir(): Pizza {
		return this.pizza
	}
}

const pedidoPizza = new PizzaConcreteBuilder()
	.definirTipoMassa('normal')
	.definirMolho('tomate')
	.definirQueijo('mussarela')
	.definirCoberturas(['calabresa', 'portuguesa'])

console.log(pedidoPizza.construir().descrever())
