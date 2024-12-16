
import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './views/home/Home';
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEnderecoCliente from './views/cliente/FormEnderecoCliente';
import ListEnderecoCliente from './views/cliente/ListEnderecoCliente';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import FormCategoriaProduto from './views/categoriaproduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaproduto/ListCategoriaProduto';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import FormVendas from './views/vendas/FormVendas';
import ListVendas from './views/vendas/ListVendas';

function Rotas() {

    return (

        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="form-cliente" element={<FormCliente />} />
                <Route path="list-cliente" element={<ListCliente />} />
                <Route path="form-enderecoCliente" element={<FormEnderecoCliente />} />
                <Route path="list-enderecoCliente" element={<ListEnderecoCliente />} />
                <Route path="form-produto" element={<FormProduto />} />
                <Route path="list-produto" element={<ListProduto />} />
                <Route path="form-categoriaProduto" element={<FormCategoriaProduto />} />
                <Route path="list-categoriaProduto" element={<ListCategoriaProduto />} />
                <Route path="form-entregador" element={<FormEntregador />} />
                <Route path="list-entregador" element={<ListEntregador />} />
                <Route path="form-vendas" element={<FormVendas />} />
                <Route path="list-vendas" element={<ListVendas />} />
            </Routes>
        </>

    )
}

export default Rotas
