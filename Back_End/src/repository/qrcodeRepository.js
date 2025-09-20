import { conection } from "../connection.js";

// Listar todos os QRCodes

export async function listarQRCodes() {
  const comando = `
    SELECT q.id_qrcode,
           q.numero_qrcode,
           v.nome AS visitante
      FROM qrcode q
INNER JOIN visitante v ON v.id_visitante = q.id_visitante
  `;
  const [registros] = await conection.query(comando);
  return registros;
}

// Criar novo QRCode

export async function criarQRCode(novo) {
  const comando = `
    INSERT INTO qrcode (id_visitante, numero_qrcode)
         VALUES (?, ?)
  `;
  const [info] = await conection.query(comando, [
    novo.id_visitante,
    novo.numero_qrcode
  ]);
  return info.insertId;
}

// Deletar QRCode

export async function deletarQRCode(id) {
  const comando = `
    DELETE FROM qrcode
     WHERE id_qrcode = ?
  `;
  const [info] = await conection.query(comando, [id]);
  return info.affectedRows;
}
