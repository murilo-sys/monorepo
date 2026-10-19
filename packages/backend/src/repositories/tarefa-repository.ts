import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { tarefasTabela } from "../db/schema";
import { Tarefa, type StatusTarefa } from "../domains/tarefa";

export default class TarefaRepository {
  public async listarTarefas(): Promise<Tarefa[]> {
    const linhas = await db.select().from(tarefasTabela);
    return linhas.map((tarefa) => {
      return Tarefa.reconstruir(tarefa.id, tarefa.nome, tarefa.atividade, tarefa.status as StatusTarefa);
    });
  }

  public async adicionarTarefa(tarefa: Tarefa): Promise<void> {
    await db.insert(tarefasTabela).values({
      status: tarefa.getStatus(),
      nome: tarefa.getNome(),
      id: tarefa.id,
      atividade: tarefa.getAtividade()
    });
  }

  public async buscarTarefa(id: string): Promise<Tarefa | undefined> {
    const [linha] = await db.select().from(tarefasTabela).where(eq(tarefasTabela.id, id));
    if (!linha) return undefined;
    return Tarefa.reconstruir(linha.id, linha.nome, linha.atividade, linha.status as StatusTarefa);
  }

  public async atualizarTarefa(tarefaAtualizada: Tarefa): Promise<void> {
    await db
      .update(tarefasTabela)
      .set({
        nome: tarefaAtualizada.getNome(),
        atividade: tarefaAtualizada.getAtividade(),
        status: tarefaAtualizada.getStatus()
      })
      .where(eq(tarefasTabela.id, tarefaAtualizada.id));
  }
}
