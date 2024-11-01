import { Segment } from 'semantic-ui-react';
import './App.css';
//import FormCliente from './views/cliente/FormCliente';
//import FormProdutos from './views/produtos/FormProdutos';
import FormEntregador from './views/entregador/FormEntregador';

function App() {
  return (
    <div className="App">
      
    <FormEntregador />

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
              &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
