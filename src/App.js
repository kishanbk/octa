import Header from './components/Header/Header';
import { Container } from "@material-ui/core";
import './App.css';
import Games from './components/Games/Games';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Container>

          <Games />

        </Container>
      </div>
    </>
  );
}

export default App;
