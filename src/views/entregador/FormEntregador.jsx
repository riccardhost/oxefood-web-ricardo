import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormEntregador() {

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [foneCelular, setFoneCelular] = useState('');
    const [foneFixo, setFoneFixo] = useState('');
    const [quantidadeEntregas, setQuantidadeEntregas] = useState('');
    const [valorFrete, setValorFrete] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [complemento, setComplemento] = useState('');
    const [ativo, setAtivo] = useState('nao'); // "Ativo" controla os botões de rádio "Sim" ou "Não"

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
    
    const handleAtivoChange = (e, { value }) => setAtivo(value);

    function salvar() {

		let entregadorRequest = {
		     nomeCompleto: nomeCompleto,
		     cpf: cpf,
             rg: rg,
		     dataNascimento: dataNascimento,
		     foneCelular: foneCelular,
		     foneFixo: foneFixo,
             quantidadeEntregas: quantidadeEntregas,
             valorFrete: valorFrete,
             endereco: endereco,
             numero: numero,
             bairro: bairro,
             cidade: cidade,
             cep: cep,
             uf: uf,
             complemento: complemento,
             ativo: ativo
		}
	
		axios.post("http://localhost:8080/api/entregador", entregadorRequest)
		.then((response) => {
		     console.log('Cliente cadastrado com sucesso!')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um cliente!')
		})
	}

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>

                    <h2>

                        <span style={{ color: 'darkgray' }}>
                            Entregador &nbsp;<Icon name='angle double right' size="small" />{" "}
                        </span> Cadastro

                    </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome Completo'
                                    value={nomeCompleto}
                                    onChange={e => setNomeCompleto(e.target.value)}
                                    maxLength="250"
                                    placeholder="Informe o nome completo!"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                    width={5}
                                >
                                    <InputMask
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                    width={4}
                                />

                            </Form.Group>

                            {/* Dados de Contato */}

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Data de Nascimento'
                                    width={4}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={5}
                                >
                                    <InputMask
                                        mask="(99) 99999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={5}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Quantidade de Entregas'
                                    value={quantidadeEntregas}
                                    onChange={e => setQuantidadeEntregas(e.target.value)}
                                    width={4}
                                />

                                <Form.Input
                                    fluid
                                    label='Valor por Frete'
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}
                                    width={4}
                                />

                            </Form.Group>
                                                       
                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Endereço'
                                    value={endereco}
                                    onChange={e => setEndereco(e.target.value)}
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
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                    placeholder="Informe o nome do bairro!"
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                    placeholder="Informe o nome da cidade!"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CEP'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99999-999"
                                        value={cep}
                                        onChange={e => setCep(e.target.value)}
                                        maskChar={null}
                                        placeholder="Ex: 00000-000"
                                    />

                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Select
                                    fluid
                                    label='UF'
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

                            {/* Status Ativo */}

                            <Form.Group>

                                <Form.Field>
                                    <label>Ativo: </label>
                                </Form.Field>

                                <Form.Field>

                                    <Form.Radio
                                        label='Sim'
                                        value='sim'
                                        checked={ativo === 'sim'}
                                        onChange={handleAtivoChange}
                                    />

                                </Form.Field>

                                <Form.Field>

                                    <Form.Radio
                                        label='Não'
                                        value='nao'
                                        checked={ativo === 'nao'}
                                        onChange={handleAtivoChange}
                                    />

                                </Form.Field>

                            </Form.Group>

                            {/* Botões */}

                            <div style={{ marginTop: '4%' }}>

                                <Button
                                    type="button"
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                >
                                    <Icon name='reply' />
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
