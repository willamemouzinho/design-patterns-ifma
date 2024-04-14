class Calendario {
    public ehDiaUtil() {}
  }
  
  class Banco {
    public atualizarContas() {}
  }
  
  class GerenciadorDeClientes {}
  class GerenciadorDeContas {}
  class GerenciadorDeTransacoes {}
  
  class Cliente {
    public sacar(conta: Conta) {}
    public transferir(conta: Conta) {}
  }
  
  interface Transacao {
    processarTransacao(): void;
    // processarTransacao2: () => void;
  }
  
  class Sacar implements Transacao {
    public processarTransacao() {}
  }
  
  class Transferir implements Transacao {
    public processarTransacao() {}
  }
  
  abstract class Conta {
    abstract atualizar(): void;
  }
  
  class Poupanca extends Conta {
    public atualizar() {}
  }
  class ContaCorrente extends Conta {
    public atualizar() {}
  }
  