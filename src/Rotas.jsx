
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './views/util/ProtectedRoute';

import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';

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

                <Route path="/" element={ <FormLogin/> } />

                <Route path="/home" element={ 
                    <ProtectedRoute>
                        <Home /> 
                    </ProtectedRoute>
                } />

                <Route path="form-cliente" element={
                    <ProtectedRoute>
                        <FormCliente />
                    </ProtectedRoute>    
                } />

                <Route path="list-cliente" element={
                    <ProtectedRoute>    
                        <ListCliente />
                    </ProtectedRoute>
                } />

                <Route path="form-enderecoCliente" element={
                    <ProtectedRoute>
                        <FormEnderecoCliente />
                    </ProtectedRoute>
                } />

                <Route path="list-enderecoCliente" element={
                    <ProtectedRoute>
                        <ListEnderecoCliente />
                    </ProtectedRoute>
                } />

                <Route path="form-produto" element={
                    <ProtectedRoute>
                        <FormProduto />
                    </ProtectedRoute>
                } />

                <Route path="list-produto" element={
                    <ProtectedRoute>
                        <ListProduto />
                    </ProtectedRoute>
                } />

                <Route path="form-categoriaProduto" element={
                    <ProtectedRoute>
                        <FormCategoriaProduto />
                    </ProtectedRoute>
                 } />

                <Route path="list-categoriaProduto" element={
                    <ProtectedRoute>
                        <ListCategoriaProduto />
                    </ProtectedRoute>
                } />

                <Route path="form-entregador" element={
                    <ProtectedRoute>
                        <FormEntregador />
                    </ProtectedRoute>
                } />

                <Route path="list-entregador" element={
                    <ProtectedRoute>
                        <ListEntregador />
                    </ProtectedRoute>
                } />

                <Route path="form-vendas" element={
                    <ProtectedRoute>
                        <FormVendas />
                    </ProtectedRoute>
                } />

                <Route path="list-vendas" element={
                    <ProtectedRoute>
                        <ListVendas />
                    </ProtectedRoute>
                } />

            </Routes>

        </>

    )
}

export default Rotas
