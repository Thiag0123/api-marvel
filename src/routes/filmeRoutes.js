const express = require('express');
const router = express.Router();

const FilmeController = require('../controllers/filmeController');

router.post('/filmes', FilmeController.criar);
router.get('/filmes', FilmeController.listar);

// 👇 NOVAS ROTAS
router.get('/filmes/:id', FilmeController.buscarPorId);
router.put('/filmes/:id', FilmeController.atualizar);
router.delete('/filmes/:id', FilmeController.deletar);

module.exports = router;