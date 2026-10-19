"use server";

import { tarefaUseCase } from "@monorepo/backend";
import { revalidatePath } from "next/cache";

export async function finalizarTarefa(id: string) {
  await tarefaUseCase.finalizarTarefa(id);
  revalidatePath("/");
}
