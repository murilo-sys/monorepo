import { Tarefa } from "../domains/tarefa";

export default class TarefaRepository {
  private lista: Tarefa[];

  constructor() {
    this.lista = [new Tarefa("Aprender monorepo", "Aprendendo a criar um monorepo com IA")];
  }

  public listarTarefas(): Tarefa[] {
    //Retorna uma cópia da lista, justamente para não ser possivel modificar ela
    return [...this.lista];
  }

  public adicionarTarefa(tarefa: Tarefa): void {
    this.lista.push(tarefa);
  }
}
