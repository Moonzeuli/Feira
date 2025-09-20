import * as repo from '../repository/visitanteRepository.js';
import { Router } from "express";
import { getAuthentication } from '../utils/jwt.js';

const endpoints = Router();
const autenticador = getAuthentication();

// Listar os visitantes

endpoints.get('/visitantes', autenticador, async (req, resp) => {
  let lista = await repo.listarVisitantes();
  resp.send(lista);
});

// Buscar por ID

endpoints.get('/visitantes/:id', autenticador, async (req, resp) => {
  let id = req.params.id;
  let visitante = await repo.buscarVisitantePorId(id);
  if (!visitante) resp.status(404).send({ erro: "Visitante não encontrado" });
  else resp.send(visitante);
});

// Criar "cadastro" do visitante

endpoints.post('/visitantes', async (req, resp) => {
  let novo = req.body;
  let id = await repo.criarVisitante(novo);
  resp.send({ novoId: id });
});

// Atualizar visitante

endpoints.put('/visitantes/:id', autenticador, async (req, resp) => {
  let id = req.params.id;
  let dados = req.body;
  let linhas = await repo.atualizarVisitante(id, dados);

  if (linhas == 0)
    resp.status(404).send({ erro: "Visitante não encontrado" });
  else
    resp.send({ msg: "Visitante atualizado com sucesso" });
});

// Deletar visitante

endpoints.delete('/visitantes/:id', autenticador, async (req, resp) => {
  let id = req.params.id;
  let linhas = await repo.deletarVisitante(id);

  if (linhas == 0)
    resp.status(404).send({ erro: "Visitante não encontrado" });
  else
    resp.send({ msg: "Visitante removido com sucesso" });
});

export default endpoints;
