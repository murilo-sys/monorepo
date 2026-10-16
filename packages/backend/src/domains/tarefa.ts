export type StatusTarefa = "Pendente" | "Em andamento" | "Finalizado";

export class Tarefa {
  public readonly id: string; // readonly impede que alguém mude o ID depois de criado!
  public nome: string;
  public status: StatusTarefa;
  public atividade: string;

  constructor(nome: string, atividade: string) {
    //Checa se o nome é menor que 3
    if (nome.trim().length < 3) throw new Error("Nome precisa ter no minímo 3 caracteres");

    //Checa se a atividade é menor que 3
    if (atividade.trim().length < 3) throw new Error("Atividade precisa ter no minímo 3 caracteres");

    this.id = crypto.randomUUID();
    this.nome = nome;
    this.status = "Pendente";
    this.atividade = atividade;
  }
}
