import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Layout from './layouts';
import MainRoutes from './routes/routes';

function App() {
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
