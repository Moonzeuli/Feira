import express from "express";
import { adicionarRotas } from "./rotas.js";

const app = express();
app.use(express.json());

adicionarRotas(app);

app.listen(5010, () => console.log(" API subiu com sucesso!!!!!"));
