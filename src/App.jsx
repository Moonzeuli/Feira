import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Andar from "./pages/andar.jsx";
import Cursos from "./pages/cursos.jsx";
import DataHora from "./pages/datahora.jsx";
import Inscricao from "./pages/Inscricao.jsx";
import Login from "./pages/login.jsx";
import Vincular from "./pages/vincular.jsx";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/andar" element={<Andar />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/inscricao" element={<Inscricao />} />
        <Route path="/data" element={<DataHora/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/vincular" element={<Vincular/>} />
      </Routes>
    </Router>
  );
};

export default App;
