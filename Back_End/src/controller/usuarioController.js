import * as repo from '../repository/usuarioRepository.js';
import { Router } from "express";
import { getAuthentication } from '../utils/jwt.js';

const endpoints = Router();
const autenticador = getAuthentication();

// Listar 

endpoints.get('/usuarios', async (req, resp) => {
  let lista = await repo.listarUsuarios();
  resp.send(lista);
});

// Buscar por ID

endpoints.get('/usuarios/:id', autenticador, async (req, resp) => {
  let id = req.params.id;
  let usuario = await repo.buscarUsuarioPorId(id);
  if (!usuario) resp.status(404).send({ erro: "Usuário não encontrado" });
  else resp.send(usuario);
});

// Criar 

endpoints.post('/usuarios', async (req, resp) => {
  let novo = req.body;
  let id = await repo.criarUsuario(novo);
  resp.send({ novoId: id });
});

// Atualizar 

endpoints.put('/usuarios/:id', autenticador, async (req, resp) => {
  let id = req.params.id;
  let dados = req.body;
  let linhas = await repo.atualizarUsuario(id, dados);

  if (linhas == 0)
    resp.status(404).send({ erro: "Usuário não encontrado" });
  else
    resp.send({ msg: "Usuário atualizado com sucesso" });
});


// Deletar 

endpoints.delete('/usuarios/:id', autenticador, async (req, resp) => {
  let id = req.params.id;
  let linhas = await repo.deletarUsuario(id);

  if (linhas == 0)
    resp.status(404).send({ erro: "Usuário não encontrado" });
  else
    resp.send({ msg: "Usuário removido com sucesso" });
});

export default endpoints;
