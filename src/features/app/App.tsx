import { BrowserRouter } from 'react-router-dom';
import { router, routes } from 'services/router';
import { Header, Footer } from 'features';

import './App.css';

function App() {
  
  const routerElement = (): JSX.Element => {
    return (
      <BrowserRouter>
        {router(routes)}
      </BrowserRouter>
    );
  };

  return (
    <div className="App">
      <Header />
      {routerElement()}
      <Footer />
    </div>
  );
}

export default App;
