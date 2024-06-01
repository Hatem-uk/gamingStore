import './App.css';
import {Container } from './components/index';

import { Header ,Footer,Hero ,MostPopular,GaminLiberary} from './sections/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Hero/>
        <MostPopular/>
        <GaminLiberary/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
