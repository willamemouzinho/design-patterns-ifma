interface Coffe {
	getPrice(): number
	getDescription(): string
}

class Express implements Coffe {
	getPrice(): number {
		return 5
	}
	getDescription(): string {
		return 'Café expresso'
	}
}

class CoffeDecorator implements Coffe {
	protected coffe: Coffe

	constructor(coffe: Coffe) {
		this.coffe = coffe
	}
	getPrice(): number {
		return this.coffe.getPrice()
	}
	getDescription(): string {
		return this.coffe.getDescription()
	}
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class Cream extends CoffeDecorator {
	public getPrice(): number {
		return super.getPrice() + 1
	}
	public getDescription(): string {
		return `${super.getDescription()}, Creme`
	}
}

class Mlik extends CoffeDecorator {
	public getPrice(): number {
		return super.getPrice() + 2
	}
	public getDescription(): string {
		return `${super.getDescription()}, Leite`
	}
}

/**
 * This way the client code can support both simple components...
 */
// const expressCoffe = new Express()
// console.log("Client: I've got a simple component:")
// console.log('')

// const decorator1 = new ConcreteDecoratorA(simple)
// const decorator2 = new ConcreteDecoratorB(decorator1)
// console.log("Client: Now I've got a decorated component:")
// clientCode(decorator2)

function main() {
	const express: Coffe = new Express()
	console.log(`${express.getDescription()} | R$ ${express.getPrice()}`)
	/* Café Expresso | R$ 1.5 */

	const expressWithCream: Coffe = new Cream(express)
	console.log(
		`${expressWithCream.getDescription()} | R$ ${expressWithCream.getPrice()}`,
	)
	/* Café Expresso, expressWithCream | R$ 2.0 */

	// const expressWithCreamAndMilk: Coffe = new Milk(expressWithCream)
	// const expressWithCreamMilkAndSyrups: Coffe = new Syrups(
	// 	expressWithCreamAndMilk,
	// )
	// console.log(
	// 	`${expressWithCreamMilkAndSyrups.getDescription()} | R$ ${expressWithCreamMilkAndSyrups.getPrice()}`,
	// )
	/* Café Expresso, Creme, Caramelo, Moca | R$ 3.1 */
}

main()
