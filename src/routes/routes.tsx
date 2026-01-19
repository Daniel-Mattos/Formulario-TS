import { AppContext } from '@/context/AppContext';
import Conta from '@/pages/Conta';
import Home from '@/pages/Home';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
    </Routes>
  );
};

export default MainRoutes;
