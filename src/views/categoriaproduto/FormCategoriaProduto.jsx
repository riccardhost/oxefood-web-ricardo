import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";

export default function FormCategoriaProduto() {

    const { state } = useLocation();
    const [idCategoriaProduto, setIdCategoriaProduto] = useState();

    const [descricao, setDescricao] = useState('');

    useEffect(() => {

        if (state != null && state.id != null) {

            axios.get("http://localhost:8080/api/categoriaProduto/" + state.id)
                .then((response) => {
                    setIdCategoriaProduto(response.data.id)
                    setDescricao(response.data.descricao)

                })
        }

    }, [state])

    function salvar() {

        let categoriaProdutoRequest = {
            descricao: descricao,
        }

        if (idCategoriaProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/categoriaProduto/" + idCategoriaProduto, categoriaProdutoRequest)

                .then((response) => {
                    console.log('Categoria de Produto alterado com sucesso!')
                })
                .catch((error) => {
                    console.log('Erro ao alterar a Categoria de Produto!')
                })

        } else { //Cadastro:
            axios.post("http://localhost:8080/api/categoriaProduto", categoriaProdutoRequest)

                .then((response) => {
                    console.log('Categoria de Produto cadastrado com sucesso!')
                })
                .catch((error) => {
                    console.log('Erro ao incluir a Categoria de Produto!')
                })
        }

    }

    return (

        <div>

            <MenuSistema tela={'categoriaProduto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>

                    {idCategoriaProduto === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Categoria de Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idCategoriaProduto !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Categoria de Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Categoria do Produto'>
                                    <textarea
                                        id="texto"
                                        rows="10"
                                        cols="10"
                                        width={20}
                                        placeholder="Informe a Categoria do Produto!"
                                        value={descricao}
                                        onChange={e => setDescricao(e.target.value)}
                                    />

                                </Form.Input>

                            </Form.Group>

                            {/* Botões */}

                            <div style={{ marginTop: '4%' }}>

                                <Button
                                    as={Link}
                                    to="/list-categoriaProduto"
                                    type="button"
                                    inverted
                                    circular
                                    icon
                                    labelPosition="left"
                                    color="orange"
                                >
                                    <Icon name="reply" />
                                    Voltar
                                </Button>

                                <Button
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='blue'
                                    floated='right'
                                    onClick={() => salvar()}
                                >
                                    <Icon name='save' />
                                    Salvar
                                </Button>

                            </div>

                        </Form>

                    </div>

                </Container>

            </div>

        </div>

    );
}
