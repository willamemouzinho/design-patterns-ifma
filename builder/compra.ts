interface Item {
	info: string
	preco: number
	quantidade: number
}
class PedidoCompra {
	public itens: Item[] = []
	public infoEntrga = ''

	descrever() {
		const pedido = {
			itens: this.itens,
			infoEntrga: this.infoEntrga,
		}

		return pedido
	}
}

interface PedidoCompraBuilder {
	definirItens(itens: Item[]): this
	definirInfoEntrga(infoEntrga: string): this
	// definirQuantidade(quantidade: number): this
	// definirPreco(preco: number): this

	construir(): PedidoCompra
}

class PedidoCompraConcreteBuilder implements PedidoCompraBuilder {
	private pedido: PedidoCompra

	constructor() {
		this.pedido = new PedidoCompra()
	}

	public definirItens(itens: Item[]): this {
		this.pedido.itens = [...itens]
		return this
	}

	public definirInfoEntrga(infoEntrga: string): this {
		this.pedido.infoEntrga = infoEntrga
		return this
	}
	// public definirQuantidade(quantidade: number): this {
	// 	this.pedido.quantidade = quantidade
	// 	return this
	// }

	// public definirPreco(preco: number): this {
	// 	this.pedido.preco = preco
	// 	return this
	// }

	public construir(): PedidoCompra {
		return this.pedido
	}
}

const pedido = new PedidoCompraConcreteBuilder()
	.definirItens([
		{
			info: 'massa de bolo',
			preco: 200,
			quantidade: 1,
		},
	])
	.definirInfoEntrga('Rua Santo André, Pq Alvorada I')

console.log(pedido.construir().descrever())
