import TarefaRepository from "./repositories/tarefa-repository";
import TarefaUseCase from "./use-cases/tarefa-use-case";

const repository = new TarefaRepository();

export const tarefaUseCase = new TarefaUseCase(repository);

tarefaUseCase.criarTarefa("Dirigir", "Aprender a dirigir");

export type { StatusTarefa, Tarefa } from "./domains/tarefa";
