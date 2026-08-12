import { homedir } from "node:os";
import { join } from "node:path";

export interface DatabaseConfig {
  readonly path: string;
}

export const databaseConfig: DatabaseConfig = Object.freeze({
  path: join(homedir(), ".vordr", "vordr.db"),
});
