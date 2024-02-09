class Consulta {
  public id: string
  public data: Date
  public descricao: string

  constructor(descricao: string) {
    this.id = crypto.randomUUID()
    this.data = new Date()
    this.descricao = descricao

    return {
      id: this.id,
      data: this.data,
      descricao: this.descricao,
    }
  }
}

class Paciente {
  constructor(
    public nome: string,
    public idade: number,
    public historicoDeConsultas: Consulta[]
  ) {
    this.nome = nome
    this.idade = idade
    this.historicoDeConsultas = historicoDeConsultas

    if (this.idade < 0)
      throw new Error('A idade não pode ser um valor negativo')
  }

  adicionarConsulta(descricao: string) {
    const novaConsulta = new Consulta(descricao)
    return this.historicoDeConsultas.push(novaConsulta)
  }
  adicionarConsulta2(consulta: Consulta) {
    return this.historicoDeConsultas.push(consulta)
  }

  mostrarHistoricoDeConsultas() {
    return this.historicoDeConsultas
  }
}

const meuPaciente = new Paciente('Willame', 21, [])

console.log('nome do paciente: ', meuPaciente.nome)
console.log('idade do paciente: ', meuPaciente.idade)
console.log(
  'histórico de consultas: ',
  meuPaciente.mostrarHistoricoDeConsultas()
)
meuPaciente.adicionarConsulta2(new Consulta('dor de dente'))
meuPaciente.adicionarConsulta('verme')
console.log(
  'histórico de consultas: ',
  meuPaciente.mostrarHistoricoDeConsultas()
)
