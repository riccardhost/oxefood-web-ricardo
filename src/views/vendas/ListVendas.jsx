import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal, Header } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListVendas() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/vendas")
            .then((response) => {
                setLista(response.data)
            })
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/vendas/' + idRemover)
            .then((response) => {

                console.log('Venda removida com sucesso!')

                axios.get("http://localhost:8080/api/vendas")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover a venda!')
            })
        setOpenModal(false)
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

                <Container textAlign='justified' >

                    <h2> Vendas </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-vendas'
                        />

                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row textAlign='center'>
                                    <Table.HeaderCell>Cliente</Table.HeaderCell>
                                    <Table.HeaderCell>Produto</Table.HeaderCell>
                                    <Table.HeaderCell>Status do Produto</Table.HeaderCell>
                                    <Table.HeaderCell>Data da Venda</Table.HeaderCell>
                                    <Table.HeaderCell>Valor Total</Table.HeaderCell>
                                    <Table.HeaderCell>Observação</Table.HeaderCell>
                                    <Table.HeaderCell>Retirada em Loja</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(vendas => (

                                    <Table.Row key={vendas.id}>
                                        <Table.Cell>{vendas.cliente}</Table.Cell>
                                        <Table.Cell>{vendas.produto}</Table.Cell>
                                        <Table.Cell>{vendas.statusVenda}</Table.Cell>
                                        <Table.Cell>{formatarData(vendas.dataVenda)}</Table.Cell>
                                        <Table.Cell>{vendas.valorTotal}</Table.Cell>
                                        <Table.Cell>{vendas.observacao}</Table.Cell>
                                        <Table.Cell>{vendas.retiradaEmLoja ? 'Sim' : 'Não'}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados desta venda'
                                                icon>
                                                <Link to="/form-vendas" state={{ id: vendas.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button>

                                            &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover esta venda'
                                                icon
                                                onClick={e => confirmaRemover(vendas.id)}>
                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >

                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>

                <Modal.Actions>

                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>

                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>

                </Modal.Actions>

            </Modal>

        </div>
    )
}
