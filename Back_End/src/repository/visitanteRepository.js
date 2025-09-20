import { conection } from "../connection.js";

// Listar visitantes

export async function listarVisitantes() {
  const comando = `
    select *
    from visitante
  `;
  const [registros] = await conection.query(comando);
  return registros;
}

// Procurar visitante por ID

export async function buscarVisitantePorId(id) {
  const comando = `
    select *
    from visitante
    where id_visitante = ?
  `;
  const [registros] = await conection.query(comando, [id]);
  return registros[0];
}

// Criar "cadastro" do visitante

export async function criarVisitante(novo) {
  const comando = `
    insert into visitante (nome, escolaridade, interesse, previsao_de_chegada, email, sabendo_feira, telefone, ex_aluno, cpf)
         values (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [info] = await conection.query(comando, [
    novo.nome,
    novo.escolaridade,
    novo.interesse,
    novo.previsao_de_chegada,
    novo.email,
    novo.sabendo_feira,
    novo.telefone,
    novo.ex_aluno,
    novo.cpf
  ]);
  return info.insertId;
}

// Atualizar os dados do visitante

export async function atualizarVisitante(id, visitante) {
  const comando = `
    update visitante
       set nome = ?,
           escolaridade = ?,
           interesse = ?,
           previsao_de_chegada = ?,
           email = ?,
           sabendo_feira = ?,
           telefone = ?,
           ex_aluno = ?,
           cpf = ?
     where id_visitante = ?
  `;
  const [info] = await conection.query(comando, [
    visitante.nome,
    visitante.escolaridade,
    visitante.interesse,
    visitante.previsao_de_chegada,
    visitante.email,
    visitante.sabendo_feira,
    visitante.telefone,
    visitante.ex_aluno,
    visitante.cpf,
    id
  ]);
  return info.affectedRows;
}

// Deletar visitante

export async function deletarVisitante(id) {
  const comando = `
   delete from visitante
     where id_visitante = ?
  `;
  const [info] = await conection.query(comando, [id]);
  return info.affectedRows;
}
