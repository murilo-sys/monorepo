import ErroDeDominio from "./erro-dominio";

export type StatusTarefa = "Pendente" | "Em andamento" | "Finalizado";

export class Tarefa {
  public readonly id: string; // readonly impede que alguém mude o ID depois de criado!
  private nome: string;
  private status: StatusTarefa;
  private atividade: string;

  private constructor(id: string, nome: string, atividade: string, status: StatusTarefa) {
    if (nome.trim().length < 3) throw new ErroDeDominio("Nome precisa ter no minímo 3 caracteres");
    if (atividade.trim().length < 3) throw new ErroDeDominio("Atividade precisa ter no minímo 3 caracteres");

    this.id = id;
    this.nome = nome;
    this.atividade = atividade;
    this.status = status;
  }

  public static criar(nome: string, atividade: string): Tarefa {
    return new Tarefa(crypto.randomUUID(), nome, atividade, "Pendente");
  }

  public static reconstruir(id: string, nome: string, atividade: string, status: StatusTarefa): Tarefa {
    return new Tarefa(id, nome, atividade, status);
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
