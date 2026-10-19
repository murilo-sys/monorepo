export const DATABASE_URL = process.env.DATABASE_URL!;

if (!DATABASE_URL) throw new Error("Variavel de ambiente DATABASE_URL não configurado.");
