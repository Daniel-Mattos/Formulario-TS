import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts';
import Conta from './pages/Conta';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conta" element={<Conta />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
