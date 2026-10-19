import { Tarefa } from "../domains/tarefa";

export default class TarefaRepository {
  private lista: Tarefa[];

  constructor() {
    this.lista = [];
  }

  public listarTarefas(): Tarefa[] {
    //Retorna uma cópia da lista, justamente para não ser possivel modificar ela
    return [...this.lista];
  }

  public adicionarTarefa(tarefa: Tarefa): void {
    this.lista.push(tarefa);
  }

  public buscarTarefa(id: string) {
    return this.lista.find((tarefa) => tarefa.id === id);
  }

  public atualizarTarefa(tarefaAtualizada: Tarefa): Tarefa | undefined {
    const index = this.lista.findIndex((tarefa) => tarefa.id === tarefaAtualizada.id);

    if (index === -1) return;

    this.lista[index] = tarefaAtualizada;

    return this.lista[index];
  }
}
