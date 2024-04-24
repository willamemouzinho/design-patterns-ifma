// interface Drink {
// 	description?: string
// 	price?: number | null
// 	getPrice(): number
// 	getDescription(): string
// }

// class Express implements Drink {
// 	public description: string
// 	public price: number

// 	public constructor() {
// 		this.description = 'Café Expresso'
// 		this.price = 5
// 	}
// 	public getPrice(): number {
// 		return this.price
// 	}

// 	public getDescription(): string {
// 		return this.description
// 	}
// }

// class Cappuccino implements Drink {
// 	public description: string
// 	public price: number

// 	public constructor(description: string) {
// 		this.description = description
// 		this.price = 7
// 	}
// 	public getPrice(): number {
// 		return this.price
// 	}

// 	public getDescription(): string {
// 		return this.description
// 	}
// }

// class Latte implements Drink {
// 	public description: string
// 	public price: number

// 	public constructor(description: string) {
// 		this.description = description
// 		this.price = 8
// 	}
// 	public getPrice(): number {
// 		return this.price
// 	}

// 	public getDescription(): string {
// 		return this.description
// 	}
// }

// abstract class DecoratorDrink implements Drink {
// 	protected drink: Drink

// 	protected constructor(drink: Drink) {
// 		this.drink = drink
// 	}

// 	public abstract getDescription(): string
// 	public abstract getPrice(): number
// }

// class Cream extends DecoratorDrink {
// 	protected drink: Drink
// 	public constructor(drink: Drink) {
// 		super(drink)
// 		this.drink = drink
// 	}

// 	public getDescription(): string {
// 		return `${this.drink.getDescription()}, Creme`
// 	}

// 	public getPrice(): number {
// 		return this.drink.getPrice() + 3
// 	}
// }

// class Milk extends DecoratorDrink {
// 	protected drink: Drink
// 	public constructor(drink: Drink) {
// 		super(drink)
// 		this.drink = drink
// 	}

// 	public getDescription(): string {
// 		return `${this.drink.getDescription()}, Leite`
// 	}

// 	public getPrice(): number {
// 		return this.drink.getPrice() + 2.5
// 	}
// }

// class Syrups extends DecoratorDrink {
// 	public drink: Drink
// 	public constructor(drink: Drink) {
// 		super(drink)
// 		this.drink = drink
// 	}

// 	public getDescription(): string {
// 		return `${this.drink.getDescription()}, Xarope`
// 	}

// 	public getPrice(): number {
// 		return this.drink.getPrice() + 3
// 	}
// }

// function main() {
// 	const express: Drink = new Express()
// 	console.log(`${express.getDescription()} | R$ ${express.getPrice()}`)
// 	/* Café Expresso | R$ 1.5 */

// 	const expressWithCream: Drink = new Cream(express)
// 	console.log(
// 		`${expressWithCream.getDescription()} | R$ ${expressWithCream.getPrice()}`,
// 	)
// 	/* Café Expresso, expressWithCream | R$ 2.0 */

// 	const expressWithCreamAndMilk: Drink = new Milk(expressWithCream)
// 	const expressWithCreamMilkAndSyrups: Drink = new Syrups(
// 		expressWithCreamAndMilk,
// 	)
// 	console.log(
// 		`${expressWithCreamMilkAndSyrups.getDescription()} | R$ ${expressWithCreamMilkAndSyrups.getPrice()}`,
// 	)
// 	/* Café Expresso, Creme, Caramelo, Moca | R$ 3.1 */
// }

// main()
