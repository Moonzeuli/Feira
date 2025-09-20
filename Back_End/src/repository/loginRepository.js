import { conection } from "../connection.js";

// Consultar credenciais 

export async function consultarCredenciais(email, senha) {
  const comando = `
    select id_usuario,
           nome,
           email
      from usuario
     where email = ?
       and senha = ?
  `;
  const [registros] = await conection.query(comando, [email, senha]);
  return registros[0];
}

// Criar a conta de um usuário

export async function criarConta(novoUsuario) {
  const comando = `
    insert into usuario (nome, email, senha)
        values (?, ?, ?)
  `;
  const [info] = await conection.query(comando, [
    novoUsuario.nome,
    novoUsuario.email,
    novoUsuario.senha
  ]);
  return info.insertId;
}

