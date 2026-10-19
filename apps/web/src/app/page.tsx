export const instant = false;

import { finalizarTarefa } from "@/actions/finalizarTarefa.action";
import CriarTarefaForm from "@/components/CriarTarefaForm";
import { tarefaUseCase } from "@monorepo/backend";

export default async function Home() {
  const tarefas = await tarefaUseCase.listarTarefas();

  return (
    <div>
      <CriarTarefaForm />
      {tarefas.map((tarefa) => {
        return (
          <form
            action={finalizarTarefa.bind(null, tarefa.id)}
            className="flex flex-row gap-3 items-center"
            key={tarefa.id}
          >
            <span>{tarefa.getNome()}</span>
            <span>{tarefa.getAtividade()}</span>
            <span>{tarefa.getStatus()}</span>
            <button className="border p-1" type="submit">
              Finalizar
            </button>
          </form>
        );
      })}
    </div>
  );
}
