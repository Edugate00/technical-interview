// scripts/visualize.ts
import Database from "better-sqlite3";
import { query } from "../src/soal3.sql";

const db = new Database(":memory:");

db.exec(`
  CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    created_at TEXT
  );

  INSERT INTO users VALUES (1,'Siti'),(2,'Budi'),(3,'Cici');
  INSERT INTO orders VALUES
    (1,1,100,'2025-11-01'),
    (2,1,150,'2025-11-02'),
    (3,2, 50,'2025-11-02'),
    (4,3,300,'2025-11-03');
`);

const rows = db.prepare(query).all() as Array<{
  id: number;
  name: string;
  total: number;
}>;

// Console view
console.table(rows);

