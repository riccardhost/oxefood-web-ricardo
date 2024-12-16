import { Segment } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Rotas from './Rotas';

function App() {

  return (

    <div className="App">

      <Rotas />

        <ToastContainer />

        <div style={{ marginTop: '15%' }}>
          
          <Segment vertical color='grey' size='tiny' textAlign='center'>
            &copy; 2024 - Projeto WEB III - IFPE Jaboatão dos Guararapes
          </Segment>

        </div>

    </div>

  );
}

export default App;
