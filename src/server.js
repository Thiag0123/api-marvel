const filmeRoutes = require('./routes/filmeRoutes');
const createTables = require('./database/init');
const express = require('express');

const app = express();

app.use(express.json());
app.use('/api', filmeRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Marvel rodando 🚀' });
});

const PORT = 3000;

app.listen(PORT, async () => {
  await createTables();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});