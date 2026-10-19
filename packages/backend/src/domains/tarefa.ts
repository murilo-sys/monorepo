import ErroDeDominio from "./erro-dominio";

export type StatusTarefa = "Pendente" | "Em andamento" | "Finalizado";

export class Tarefa {
  public readonly id: string; // readonly impede que alguém mude o ID depois de criado!
  private nome: string;
  private status: StatusTarefa;
  private atividade: string;

  constructor(nome: string, atividade: string) {
    //Checa se o nome é menor que 3
    if (nome.trim().length < 3) throw new ErroDeDominio("Nome precisa ter no minímo 3 caracteres");

    //Checa se a atividade é menor que 3
    if (atividade.trim().length < 3) throw new ErroDeDominio("Atividade precisa ter no minímo 3 caracteres");

    this.id = crypto.randomUUID();
    this.nome = nome;
    this.status = "Pendente";
    this.atividade = atividade;
  }

  public finalizar() {
    this.status = "Finalizado";
  }

  public getStatus(): StatusTarefa {
    const status = this.status;
    return status;
  }

  public getNome(): string {
    const nome = this.nome;
    return nome;
  }

  public getAtividade(): string {
    const atividade = this.atividade;
    return atividade;
  }
}
