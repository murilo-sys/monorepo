import "dotenv/config";
import * as schema from "./schema";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { DATABASE_URL } from "../../env";

const client = postgres(DATABASE_URL, { prepare: false });
export const db = drizzle(client, { schema });
