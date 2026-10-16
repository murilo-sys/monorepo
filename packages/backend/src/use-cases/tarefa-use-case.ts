import { Tarefa } from "../domains/tarefa";
import TarefaRepository from "../repositories/tarefa-repository";

export default class TarefaUseCase {
  private repository: TarefaRepository;

  constructor(repository: TarefaRepository) {
    this.repository = repository;
  }

  public criarTarefa(nome: string, atividade: string) {
    const novaTarefa = new Tarefa(nome, atividade);
    this.repository.adicionarTarefa(novaTarefa);
    return novaTarefa;
  }

  public listarTarefas(): Tarefa[] {
    return this.repository.listarTarefas();
  }
}
