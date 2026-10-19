import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const tarefasTabela = pgTable("tarefas", {
  id: uuid("id").primaryKey(),
  nome: text("nome").notNull(),
  status: text("status").notNull(),
  atividade: text("atividade").notNull()
});
