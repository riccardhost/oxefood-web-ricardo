import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Header, Modal } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListEnderecoCliente() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/enderecocliente")
            .then((response) => {
                setLista(response.data)
            })
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/enderecocliente/' + idRemover)
            .then((response) => {

                console.log('Endereço removido com sucesso!', response)

                axios.get("http://localhost:8080/api/enderecocliente")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover o endereço!', error)
            })
        setOpenModal(false)
    }

    return (

        <div>

            <MenuSistema tela={'enderecocliente'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Endereço do Cliente </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-enderecoCliente'
                        />

                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row textAlign='center'>
                                    <Table.HeaderCell>Cliente</Table.HeaderCell>
                                    <Table.HeaderCell>Rua</Table.HeaderCell>
                                    <Table.HeaderCell>Número</Table.HeaderCell>
                                    <Table.HeaderCell>Bairro</Table.HeaderCell>
                                    <Table.HeaderCell>Cidade</Table.HeaderCell>
                                    <Table.HeaderCell>CEP</Table.HeaderCell>
                                    <Table.HeaderCell>Estado</Table.HeaderCell>
                                    <Table.HeaderCell>Complemento</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(enderecoCliente => (

                                    <Table.Row key={enderecoCliente.id}>
                                        <Table.Cell>{enderecoCliente.rua}</Table.Cell>
                                        <Table.Cell>{enderecoCliente.numero}</Table.Cell>
                                        <Table.Cell>{enderecoCliente.bairro}</Table.Cell>
                                        <Table.Cell>{enderecoCliente.cidade}</Table.Cell>
                                        <Table.Cell>{enderecoCliente.cep}</Table.Cell>
                                        <Table.Cell>{enderecoCliente.estado}</Table.Cell>
                                        <Table.Cell>{enderecoCliente.complemento}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste cliente'
                                                icon>
                                                <Link to="/form-enderecoCliente" state={{ id: enderecoCliente.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button>

                                            &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='grey'
                                                title='Clique aqui para adicionar o endereço deste cliente'
                                                icon>
                                                <Link to="/form-enderecoCliente" style={{ color: 'grey' }}> <Icon name='add' /> </Link>
                                            </Button>

                                            &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este cliente'
                                                icon
                                                onClick={e => confirmaRemover(enderecoCliente.id)}>
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
