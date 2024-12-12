import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { Link, useLocation } from "react-router-dom";
import MenuSistema from '../../MenuSistema';

export default function FormVendas() {

    const { state } = useLocation();
    const [idVendas, setIdVendas] = useState();

    const [cliente, setCliente] = useState('');
    const [produto, setProduto] = useState('');
    const [statusVenda, setStatusVenda] = useState('');
    const [dataVenda, setDataVenda] = useState('');
    const [valorTotal, setValorTotal] = useState('');
    const [observacao, setObservacao] = useState('');
    const [retiradaEmLoja, setRetiradaEmLoja] = useState(true); //Controla o Estado NÃO ou SIM no Formulário de Vendas

    useEffect(() => {

        if (state != null && state.id != null) {

            axios.get("http://localhost:8080/api/vendas/" + state.id)
                .then((response) => {
                    setIdVendas(response.data.id)
                    setCliente(response.data.cliente)
                    setProduto(response.data.produto)
                    setStatusVenda(response.data.statusVenda)
                    setDataVenda(response.data.dataVenda)
                    setValorTotal(response.data.valorTotal)
                    setObservacao(response.data.observacao)
                    setRetiradaEmLoja(response.data.retiradaEmLoja)
                })
        }

    }, [state])

    const ufOptions = [
        { key: 'Pedido Cancelado', value: 'Pedido Cancelado', text: 'Pedido Cancelado' },
        { key: 'Aguardando Pagamento', value: 'Aguardando Pagamento', text: 'Aguardando Pagamento' },
        { key: 'Pago', value: 'Pago', text: 'Pago' },
        { key: 'Entregue', value: 'Entregue', text: 'Entregue' },
    ];

    const handleAtivoChange = (e, { value }) => setRetiradaEmLoja(value);

    function salvar() {

        let vendasRequest = {
            cliente: cliente,
            produto: produto,
            statusVenda: statusVenda,
            dataVenda: dataVenda,
            valorTotal: valorTotal,
            observacao: observacao,
            retiradaEmLoja: retiradaEmLoja
        }

        if (idVendas != null) { //Alteração:
            axios.put("http://localhost:8080/api/vendas/" + idVendas, vendasRequest)
                .then((response) => {
                    const dataVenda = response.data.dataVenda; // A data já vem no formato dd/mm/yyyy
                    setIdVendas(response.data.id);
                    setCliente(response.data.cliente);
                    setProduto(response.data.produto);
                    setStatusVenda(response.data.statusVenda);
                    setDataVenda(dataVenda);
                    setValorTotal(response.data.valorTotal);
                    setObservacao(response.data.observacao);
                    setRetiradaEmLoja(response.data.retiradaEmLoja);

                    console.log('Venda alterado com sucesso!')
                })
                .catch((error) => {
                    console.log('Erro ao alterar a venda!', error)
                })

        } else { //Cadastro:
            axios.post("http://localhost:8080/api/vendas", vendasRequest)

                .then((response) => {
                    console.log('Venda cadastrado com sucesso!', response)
                })
                .catch((error) => {
                    console.log('Erro ao incluir a venda!', error)
                })
        }
    }

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    return (

        <div>

            <MenuSistema tela={'vendas'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>

                    {idVendas === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Vendas &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idVendas !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Vendas &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Cliente'
                                    maxLength="250"
                                    placeholder="Informe o seu nome completo!"
                                    value={cliente}
                                    onChange={e => setCliente(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Produto'
                                    value={produto}
                                    onChange={e => setProduto(e.target.value)}
                                    maxLength="250"
                                    placeholder="Informe o nome do produto!"
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Select
                                    fluid
                                    label='Status da Venda'
                                    placeholder='Selecione'
                                    options={ufOptions}
                                    value={statusVenda}
                                    onChange={(e, { value }) => setStatusVenda(value)}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Data da Venda'
                                    width={4}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 28/11/2024"
                                        value={formatarData(dataVenda)}
                                        onChange={e => setDataVenda(e.target.value)}
                                    />

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Total'
                                    value={valorTotal}
                                    onChange={e => setValorTotal(e.target.value)}
                                    width={4}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Observação'>
                                    <textarea
                                        id="texto"
                                        rows="10"
                                        cols="10"
                                        maxLength="250"
                                        placeholder="Informações sobre o produto!"
                                        value={observacao}
                                        onChange={e => setObservacao(e.target.value)}
                                    />

                                </Form.Input>

                            </Form.Group>

                            {/* Status Ativo */}

                            <Form.Group>

                                <Form.Field>
                                    <label>Retirada em Loja: </label>
                                </Form.Field>

                                <Form.Field>

                                    <Form.Radio
                                        label='Sim'
                                        value={true}
                                        checked={retiradaEmLoja === true}
                                        onChange={handleAtivoChange}
                                    />

                                </Form.Field>

                                <Form.Field>

                                    <Form.Radio
                                        label='Não'
                                        value={false}
                                        checked={retiradaEmLoja === false}
                                        onChange={handleAtivoChange}
                                    />

                                </Form.Field>

                            </Form.Group>

                            {/* Botões */}

                            <div style={{ marginTop: '4%' }}>

                                <Button
                                    as={Link}
                                    to="/list-vendas"
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