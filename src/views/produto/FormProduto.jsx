import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link } from "react-router-dom";

export default function FormProduto() {

    const [titulo, setTitulo] = useState();
    const [codigoProduto, setCodigoProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoMinEntrega, setTempoMinEntrega] = useState();
    const [tempoMaxEntrega, setTempoMaxEntrega] = useState();

    function salvar() {

        let produtoRequest = {
            titulo: titulo,
            codigoProduto: codigoProduto,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoMinEntrega: tempoMinEntrega,
            tempoMaxEntrega: tempoMaxEntrega
        }

        axios.post("http://localhost:8080/api/produto", produtoRequest)
            .then((response) => {
                console.log('Produto cadastrado com sucesso!')
            })
            .catch((error) => {
                console.log('Erro ao incluir o produto!')
            })
    }

    return (

        <div>

            <MenuSistema tela={'produto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    placeholder="Informe o título do produto!"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    maxLength="100"
                                    placeholder="Informe o código do produto!"
                                    value={codigoProduto}
                                    onChange={e => setCodigoProduto(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Descrição do Produto'>
                                    <textarea
                                        id="texto"
                                        rows="20"
                                        cols="30"
                                        maxLength="250"
                                        placeholder="Informe a descrição completa do produto!"
                                        value={descricao}
                                        onChange={e => setDescricao(e.target.value)}
                                    />

                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    maxLength="10"
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Mínimo Entrega (Em minutos)'
                                    maxLength="10"
                                    placeholder="30"
                                    value={tempoMinEntrega}
                                    onChange={e => setTempoMinEntrega(e.target.value)}
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Máximo Entrega (Em minutos)'
                                    maxLength="10"
                                    placeholder="40"
                                    value={tempoMaxEntrega}
                                    onChange={e => setTempoMaxEntrega(e.target.value)}
                                >

                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                as={Link}
                                to="/list-produto"
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

                    </div>

                </Container>
            </div>
        </div>

    );

}
