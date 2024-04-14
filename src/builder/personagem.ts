class PersonagemDeJogo {
	public nome = ''
	public classe = ''
	public habilidade = ''
	public arma = ''

	descrever() {
		const personagem = {
			nome: this.nome,
			classe: this.classe,
			habilidade: this.habilidade,
			arma: this.arma,
		}

		return personagem
	}
}

interface PersonagemBuilder {
	definirNome(nome: string): this
	definirClasse(nomeDaClasse: string): this
	definirHabilidade(habilidade: string): this
	definirArma(arma: string): this

	construir(): PersonagemDeJogo
}

class PersonagemDeJogoBuilder implements PersonagemBuilder {
	private personagem: PersonagemDeJogo

	constructor() {
		this.personagem = new PersonagemDeJogo()
	}

	public definirNome(nome: string): this {
		this.personagem.nome = nome
		return this
	}

	public definirClasse(nomeDaClasse: string): this {
		this.personagem.classe = nomeDaClasse
		return this
	}

	public definirHabilidade(habilidade: string): this {
		this.personagem.habilidade = habilidade
		return this
	}

	public definirArma(arma: string): this {
		this.personagem.arma = arma
		return this
	}

	public construir(): PersonagemDeJogo {
		return this.personagem
	}
}

const personagemBuilder = new PersonagemDeJogoBuilder()
personagemBuilder
	.definirArma('Archer')
	.definirClasse('Elf')
	.definirHabilidade('Bow')
	.definirArma('Leather armor')

const personagem = personagemBuilder.construir()
console.log(personagem.descrever())
