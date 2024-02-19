class Automovel {
    constructor(
      public marca: string,
      public modelo: string,
      public placa: string,
    ) {
      this.placa = placa;
      this.marca = marca;
      this.modelo = modelo;
    }
  }
  
  class Carro extends Automovel {
    constructor(
      marca: string,
      modelo: string,
      placa: string,
      public numPortas: number,
    ) {
      super(marca, modelo, placa);
      this.numPortas = numPortas;
    }
  }
  
  class Onibus extends Automovel {
    constructor(
      marca: string,
      modelo: string,
      placa: string,
      public numPassageiros: number,
      public numEmbratur: number,
    ) {
      super(marca, modelo, placa);
      this.numPassageiros = numPassageiros;
      this.numEmbratur = numEmbratur;
    }
  }
  
  const carro = new Carro("Ford", "Fiesta", "ABC1234", 4);
  const onibus = new Onibus("Mercedes", "Classe A", "DEF5678", 50, 40);
  console.log(carro);
  console.log(onibus);
  