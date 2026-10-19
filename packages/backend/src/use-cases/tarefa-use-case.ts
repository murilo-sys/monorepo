import ErroDeDominio from "../domains/erro-dominio";
import { Tarefa } from "../domains/tarefa";
import TarefaRepository from "../repositories/tarefa-repository";

export default class TarefaUseCase {
  private repository: TarefaRepository;

  constructor(repository: TarefaRepository) {
    this.repository = repository;
  }

  public async criarTarefa(nome: string, atividade: string) {
    const novaTarefa = Tarefa.criar(nome, atividade);
    await this.repository.adicionarTarefa(novaTarefa);
  }

  public async listarTarefas(): Promise<Tarefa[]> {
    return await this.repository.listarTarefas();
  }

  public async finalizarTarefa(id: string) {
    const tarefa = await this.repository.buscarTarefa(id);

    if (!tarefa) throw new ErroDeDominio("Tarefa não encontrada");

    tarefa.finalizar();

    await this.repository.atualizarTarefa(tarefa);
  }
}
