import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

let instance: DatabaseSync | null = null;

export function initializeDatabase(dbPath: string): DatabaseSync {
  if (instance) {
    throw new Error("Database already initialized");
  }

  mkdirSync(dirname(dbPath), { recursive: true });
  instance = new DatabaseSync(dbPath);

  instance.exec("PRAGMA journal_mode = WAL");
  instance.exec("PRAGMA foreign_keys = ON");

  return instance;
}

export function getDatabase(): DatabaseSync {
  if (!instance) {
    throw new Error("Database not initialized. Call initializeDatabase first.");
  }
  return instance;
}

export function closeDatabase(): void {
  if (instance) {
    instance.close();
    instance = null;
  }
}
