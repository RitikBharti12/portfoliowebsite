import sqlite3 from 'sqlite3';
import { join } from 'path';

const dbPath = join(process.cwd(), 'data', 'contacts.db');
const db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    console.error('Unable to open contacts database:', error);
    throw error;
  }
});

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL
    )`
  );
});

export function saveContact({ name, email, message }) {
  return new Promise((resolve, reject) => {
    const createdAt = new Date().toISOString();
    db.run(
      `INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, ?)`,
      [name, email, message, createdAt],
      function (error) {
        if (error) {
          reject(error);
          return;
        }
        resolve({ id: this.lastID, createdAt });
      }
    );
  });
}
