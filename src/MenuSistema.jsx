
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function MenuSistema(props) {

    return (

        <>

            <Menu inverted>

                <Menu.Item
                    content='Home'
                    active={props.tela === 'home'}
                    as={Link}
                    to='/'
                />

                <Menu.Item
                    content='Cliente'
                    active={props.tela === 'cliente'}
                    as={Link}
                    to='/list-cliente'
                />

                <Menu.Item
                    content='Endereco'
                    active={props.tela === 'enderecoCliente'}
                    as={Link}
                    to='/list-enderecocliente'
                />

                <Menu.Item
                    content='Produto'
                    active={props.tela === 'produto'}
                    as={Link}
                    to='/list-produto'
                />

                <Menu.Item
                    content='Categoria de Produto'
                    active={props.tela === 'categoriaProduto'}
                    as={Link}
                    to='/list-categoriaproduto'
                />

                <Menu.Item
                    content='Entregador'
                    active={props.tela === 'entregador'}
                    as={Link}
                    to='/list-entregador'
                />

                <Menu.Item
                    content='Vendas'
                    active={props.tela === 'vendas'}
                    as={Link}
                    to='/list-vendas'
                />

            </Menu>

        </>

    )
}
