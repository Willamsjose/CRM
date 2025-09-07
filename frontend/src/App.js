import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pedidos" element={<Dashboard />} />
          <Route path="/conferencia" element={<Dashboard />} />
          <Route path="/pdv" element={<Dashboard />} />
          <Route path="/nota-fiscal" element={<Dashboard />} />
          <Route path="/clientes" element={<Dashboard />} />
          <Route path="/produtos" element={<Dashboard />} />
          <Route path="/fornecedores" element={<Dashboard />} />
          <Route path="/tabela-precos" element={<Dashboard />} />
          <Route path="/condicoes-pagamento" element={<Dashboard />} />
          <Route path="/financas" element={<Dashboard />} />
          <Route path="/agendas" element={<Dashboard />} />
          <Route path="/transportadoras" element={<Dashboard />} />
          <Route path="/empresas" element={<Dashboard />} />
          <Route path="/vendedores" element={<Dashboard />} />
          <Route path="/equipes-vendas" element={<Dashboard />} />
          <Route path="/metas" element={<Dashboard />} />
          <Route path="/relatorios" element={<Dashboard />} />
          <Route path="/importacoes" element={<Dashboard />} />
          <Route path="/marketplaces" element={<Dashboard />} />
          <Route path="/ecommerce" element={<Dashboard />} />
          <Route path="/comprar-licencas" element={<Dashboard />} />
          <Route path="/usuarios" element={<Dashboard />} />
          <Route path="/sped" element={<Dashboard />} />
          <Route path="/integracoes" element={<Dashboard />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;