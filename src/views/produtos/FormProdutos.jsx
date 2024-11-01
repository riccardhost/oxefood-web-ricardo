import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProdutos () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produtos &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    placeholder="Informe o título do produto!"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    maxLength="100"
                                    placeholder="Informe o código do produto!"
                                />

                            </Form.Group>
                            
                            <Form.Group widths='equal'>
                            
                                <Form.Input
                                    fluid
                                    label='Descrição do Produto'
                                    maxLength="100"
                                    placeholder="Informe a descrição código do produto!"
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    maxLength="10"                
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Mínimo Entrega (Em minutos)'
                                    maxLength="10"
                                    placeholder="30"                        
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Máximo Entrega (Em minutos)'
                                    maxLength="10"
                                    placeholder="40"                        
                                >
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

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
