class Aluno {
  constructor(
    public nome: string,
    public matricula: string,
    public notas: number[]
  ) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = notas;
  }

  media() {
    const media = this.notas.reduce((acc, nota) => acc + nota, 0) / 4;
    return media;
  }

  verificarAprovacao() {
    const media = this.media();
    const situacao = media >= 7 ? "Aprovado" : "Reprovado";
    return situacao;
  }
}

const meuAluno = new Aluno("Willame", "20211BCC0-007", [10, 0, 7, 10]);

console.log("Informações do aluno");
console.log("Nome: ", meuAluno.nome);
console.log("Matricula: ", meuAluno.matricula);
console.log("Média: ", meuAluno.media());
console.log("Situação: ", meuAluno.verificarAprovacao());
