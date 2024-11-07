const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Middleware pour logger les requêtes
app.use((req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  fs.appendFile('app.log', log, (err) => {
    if (err) {
      console.error(err);
    }
  });
  next();
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app; // Exportez l'application pour les tests
