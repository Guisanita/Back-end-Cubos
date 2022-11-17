
const express = require('express');
const instrutores = require('../controllers/instrutores');
const aulas = require('../controllers/aulas');

const routes = express();

routes.get('/instrutores', instrutores.listarInstrutores);
routes.get('/instrutores/:id', instrutores.obterInstrutor);
routes.post('/instrutores', instrutores.cadastrarInstrutor);
routes.put('/instrutores/:id', instrutores.atualizarInstrutor);
routes.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
routes.delete('/instrutores/:id', instrutores.excluirInstrutor);
routes.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAulaInstrutor);
routes.get('/aulas', aulas.listarAulas);
routes.get('/aulas/:id', aulas.encontrarAula);
routes.get('/instrutores/:idInstrutor/aulas', aulas.encontrarAulasInstrutor);


module.exports = routes;