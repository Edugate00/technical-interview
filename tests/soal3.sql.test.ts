import Database from "better-sqlite3";
import { query } from "../src/soal3.sql";

describe("SQL Interview Test", () => {
  let db: Database.Database;

  beforeAll(() => {
    db = new Database(":memory:");

    db.exec(`
      CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
      );
      CREATE TABLE orders (
        id INTEGER PRIMARY KEY,
        user_id INTEGER NOT NULL,
        amount INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      INSERT INTO users VALUES (1, 'Siti'), (2, 'Budi'), (3, 'Cici');
      INSERT INTO orders VALUES
        (1, 1, 100),
        (2, 1, 150),
        (3, 2,  50),
        (4, 3, 300);
    `);
  });

  afterAll(() => db.close());

  test("SQL menghasilkan data dengan total >= 200", () => {
    const rows = db.prepare(query).all();
    expect(rows).toEqual([
      { id: 3, name: "Cici", total: 300 },
      { id: 1, name: "Siti", total: 250 },
    ]);
  });
});
