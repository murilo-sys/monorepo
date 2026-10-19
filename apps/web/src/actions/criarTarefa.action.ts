"use server";

import { ErroDeDominio, tarefaUseCase } from "@monorepo/backend";
import { revalidatePath } from "next/cache";

export type ActionResponse = {
  sucesso: boolean;
  erro?: string;
};

export async function criarTarefaAction(_: unknown, formData: FormData): Promise<ActionResponse> {
  const nome = String(formData.get("nome"));
  const atividade = String(formData.get("atividade"));

  try {
    await tarefaUseCase.criarTarefa(nome, atividade);
    revalidatePath("/");
    return { sucesso: true };
  } catch (error) {
    if (error instanceof ErroDeDominio) return { sucesso: false, erro: error.message };
    console.error(`Erro inesperado ocorreu: ${error}`);
    return { sucesso: false, erro: "Um erro inesperado aconteceu, tente novamente mais tarde..." };
  }
}
