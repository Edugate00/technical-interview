// TODO: Tulis query SQL yang menghasilkan kolom id, name, total
// Hint:
// - Gunakan JOIN antara tabel users dan orders
// - Gunakan GROUP BY pada kolom user
// - Gunakan HAVING untuk filter total >= 200
// - Gunakan ORDER BY untuk urutkan hasil
// npm run viz untuk melihat visualisasi table
// npm run test untuk menjalankan test

export const query = `
  SELECT 
    u.id, 
    u.name, 
    SUM(o.amount) AS total
  FROM users u
  JOIN orders o ON o.user_id = u.id
  GROUP BY u.id, u.name
  HAVING SUM(o.amount) >= 200
  ORDER BY total DESC, u.id ASC;
`;
