import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Layout from './layouts';
import MainRoutes from './routes/routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {

  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
