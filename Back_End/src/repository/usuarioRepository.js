import { conection } from "../connection.js";

// Listar todos os usuários

export async function listarUsuarios() {
  const comando = `
    select id_usuario, nome, email
    from usuario
  `;
  const [registros] = await conection.query(comando);
  return registros;
}

// Buscar usuário por ID

export async function buscarUsuarioPorId(id) {
  const comando = `
    select id_usuario, nome, email
    from usuario
    where id_usuario = ?
  `;
  const [registros] = await conection.query(comando, [id]);
  return registros[0];
}

// Criar novo usuário

export async function criarUsuario(novoUsuario) {
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

// Atualizar usuário

export async function atualizarUsuario(id, usuario) {
  const comando = `
    update usuario
       set nome = ?,
           email = ?,
           senha = ?
    where id_usuario = ?
  `;
  const [info] = await conection.query(comando, [
    usuario.nome,
    usuario.email,
    usuario.senha,
    id
  ]);
  return info.affectedRows;
}

// Deletar usuário

export async function deletarUsuario(id) {
  const comando = `
    delete from usuario
     where id_usuario = ?
  `;
  const [info] = await conection.query(comando, [id]);
  return info.affectedRows;
}
