import * as repo from '../repository/qrcodeRepository.js';
import { Router } from "express";
import { getAuthentication } from '../utils/jwt.js';

const endpoints = Router();
const autenticador = getAuthentication();

// Listar 

endpoints.get('/qrcodes', autenticador, async (req, resp) => {
  let lista = await repo.listarQRCodes();
  resp.send(lista);
});

// Criar 

endpoints.post('/qrcodes', autenticador, async (req, resp) => {
  let novo = req.body;
  let id = await repo.criarQRCode(novo);
  resp.send({ novoId: id });
});

// Deletar 

endpoints.delete('/qrcodes/:id', autenticador, async (req, resp) => {
  let id = req.params.id;
  let linhas = await repo.deletarQRCode(id);

  if (linhas == 0)
    resp.status(404).send({ erro: "QRCode não encontrado" });
  else
    resp.send({ msg: "QRCode removido com sucesso" });
});

export default endpoints;
