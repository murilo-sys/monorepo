"use client";

import { criarTarefaAction } from "@/actions/criarTarefa.action";
import { useActionState } from "react";

export default function CriarTarefaForm() {
  const [state, criarTarefaActionState, isPending] = useActionState(criarTarefaAction, null);

  return (
    <form className="flex flex-row gap-2 items-center" action={criarTarefaActionState}>
      <input type="text" name="nome" id="nome" placeholder="Nome" />
      <input type="text" name="atividade" id="atividade" placeholder="Atividade" />
      <button className="p-1 border" disabled={isPending} type="submit">
        Salvar
      </button>
      {state?.erro ? <span className="text-red-400">{state.erro}</span> : ""}
    </form>
  );
}
