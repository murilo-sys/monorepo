import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "./env";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL
  }
});
