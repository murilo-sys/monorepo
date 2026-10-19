import ErroDeDominio from "../domains/erro-dominio";
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

  public finalizarTarefa(id: string) {
    const tarefa = this.repository.buscarTarefa(id);

    if (!tarefa) throw new ErroDeDominio("Tarefa não encontrada");

    tarefa.finalizar();

    this.repository.atualizarTarefa(tarefa);
  }
}
