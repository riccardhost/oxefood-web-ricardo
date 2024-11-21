import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function Home() {

    return (

        <div>

            <MenuSistema tela={'/'} />

            <div style={{ marginTop: '5%' }}>

                <Container>

                    <Grid columns={2} divided>

                        <Grid.Row>

                            <Grid.Column>
                                <Image src='/logo-IFPE.png' size='large' />
                            </Grid.Column>

                            <Grid.Column>

                                <br /><br />
                                Bem vindo ao Sistema <strong>OxeFood</strong>! <br /><br />
                                Este sistema foi desenvolvido na disciplina de <strong>Desenvolvimento para WEB III</strong>. <br /> <br />

                                Para acessar o código da <strong>API</strong> do Sistema, acesse: <br /><br /><a href='https://github.com/riccardhost/oxefood-api-ricardo' target='_blank'> https://github.com/riccardhost/oxefood-api </a> <br /><br />

                                Para acessar o Código do <strong>Módulo WEB</strong>, acesse: <br /><br /><a href='https://github.com/riccardhost/oxefood-web-ricardo' target='_blank'> https://github.com/riccardhost/oxefood-web </a>

                            </Grid.Column>

                        </Grid.Row>

                    </Grid>

                </Container>

            </div>

        </div>

    )
}
