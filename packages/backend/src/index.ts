import "server-only";

import ErroDeDominio from "./domains/erro-dominio";
import TarefaRepository from "./repositories/tarefa-repository";
import TarefaUseCase from "./use-cases/tarefa-use-case";

const repository = new TarefaRepository();

export const tarefaUseCase = new TarefaUseCase(repository);

export type { StatusTarefa, Tarefa } from "./domains/tarefa";
export { ErroDeDominio };
