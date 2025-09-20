import * as repo from '../repository/loginRepository.js';
import { generateToken } from '../utils/jwt.js';
import { Router } from "express";

const endpoints = Router();

// Criar uma conta

endpoints.post('/login/conta', async (req, resp) => {
  let novoUsuario = req.body;
  let id = await repo.criarConta(novoUsuario);
  resp.send({ novoId: id });
});

// Fazer login

endpoints.post('/login', async (req, resp) => {
  let email = req.body.email;
  let senha = req.body.senha;

  let credenciais = await repo.consultarCredenciais(email, senha);

  if (!credenciais) {
    resp.status(401).send({ erro: 'Credenciais inválidas.' });
  } else {
    resp.send({ token: generateToken(credenciais) });
  }
});

export default endpoints;
