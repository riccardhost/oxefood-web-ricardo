import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { Link, useLocation } from "react-router-dom";
import MenuSistema from '../../MenuSistema';

export default function FormEnderecoCliente() {

    const { state } = useLocation();
    const [idEnderecoCliente, setIdEnderecoCliente] = useState();

    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [complemento, setComplemento] = useState('');

    useEffect(() => {

        if (state !== null && state.id !== null) {
            axios.get("http://localhost:8080/api/enderecocliente/" + state.id)
                .then((response) => {
                    setIdEnderecoCliente(response.data.id)
                    setRua(response.data.rua)
                    setNumero(response.data.numero)
                    setBairro(response.data.bairro)
                    setCidade(response.data.cidade)
                    setCep(response.data.cep)
                    setUf(response.data.uf)
                    setComplemento(response.data.complemento)
                })
        }

    }, [state])

    const ufOptions = [
        { key: 'AC', value: 'AC', text: 'Acre' },
        { key: 'AL', value: 'AL', text: 'Alagoas' },
        { key: 'AP', value: 'AP', text: 'Amapá' },
        { key: 'AM', value: 'AM', text: 'Amazonas' },
        { key: 'BA', value: 'BA', text: 'Bahia' },
        { key: 'CE', value: 'CE', text: 'Ceará' },
        { key: 'DF', value: 'DF', text: 'Distrito Federal' },
        { key: 'ES', value: 'ES', text: 'Espírito Santo' },
        { key: 'GO', value: 'GO', text: 'Goiás' },
        { key: 'MA', value: 'MA', text: 'Maranhão' },
        { key: 'MT', value: 'MT', text: 'Mato Grosso' },
        { key: 'MS', value: 'MS', text: 'Mato Grosso do Sul' },
        { key: 'MG', value: 'MG', text: 'Minas Gerais' },
        { key: 'PA', value: 'PA', text: 'Pará' },
        { key: 'PB', value: 'PB', text: 'Paraíba' },
        { key: 'PR', value: 'PR', text: 'Paraná' },
        { key: 'PE', value: 'PE', text: 'Pernambuco' },
        { key: 'PI', value: 'PI', text: 'Piauí' },
        { key: 'RJ', value: 'RJ', text: 'Rio de Janeiro' },
        { key: 'RN', value: 'RN', text: 'Rio Grande do Norte' },
        { key: 'RS', value: 'RS', text: 'Rio Grande do Sul' },
        { key: 'RO', value: 'RO', text: 'Rondônia' },
        { key: 'RR', value: 'RR', text: 'Roraima' },
        { key: 'SC', value: 'SC', text: 'Santa Catarina' },
        { key: 'SP', value: 'SP', text: 'São Paulo' },
        { key: 'SE', value: 'SE', text: 'Sergipe' },
        { key: 'TO', value: 'TO', text: 'Tocantins' },
    ];

    function salvar() {

        let enderecoClienteRequest = {
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            cep: cep,
            uf: uf,
            complemento: complemento,
        }

        if (idEnderecoCliente != null) { //Alteração:
            axios.put("http://localhost:8080/api/enderecocliente/" + idEnderecoCliente, enderecoClienteRequest)
                .then((response) => {
                    console.log('Endereço alterado com sucesso!', response)
                })
                .catch((error) => {
                    console.log('Erro ao alterar o endereço!', error)
                })

        } else { //Cadastro:
            axios.post("http://localhost:8080/api/enderecocliente", enderecoClienteRequest)

                .then((response) => {
                    console.log('Endereço cadastrado com sucesso!', response)
                })
                .catch((error) => {
                    console.log('Erro ao incluir o endereço!', error)
                })
        }

    }

    return (

        <div>

            <MenuSistema tela={'enderecoCliente'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>

                    {idEnderecoCliente === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Endereço &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idEnderecoCliente !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Endereço &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Endereço'
                                    value={rua}
                                    onChange={e => setRua(e.target.value)}
                                    placeholder="Informe o nome da rua!"
                                />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}
                                    width={4}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    placeholder="Informe o nome do bairro!"
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    placeholder="Informe o nome da cidade!"
                                    width={6}
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    placeholder="Ex: 00000-000"
                                    width={6}
                                >
                                    <InputMask
                                        mask="99999-999"
                                        value={cep}
                                        onChange={e => setCep(e.target.value)}
                                    />

                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Select
                                    fluid
                                    label='Estado'
                                    placeholder='Selecione'
                                    options={ufOptions}
                                    value={uf}
                                    onChange={(e, { value }) => setUf(value)}
                                />

                            </Form.Group>

                            {/* Complemento */}

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    value={complemento}
                                    onChange={e => setComplemento(e.target.value)}
                                    placeholder="Informe o complemento!"
                                />

                            </Form.Group>

                            {/* Botões */}

                            <div style={{ marginTop: '4%' }}>

                                <Button
                                    as={Link}
                                    to="/list-cliente"
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
