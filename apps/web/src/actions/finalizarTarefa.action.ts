"use server";

import { tarefaUseCase } from "@monorepo/backend";
import { revalidatePath } from "next/cache";

export async function finalizarTarefa(id: string) {
  tarefaUseCase.finalizarTarefa(id);
  revalidatePath("/");
}
