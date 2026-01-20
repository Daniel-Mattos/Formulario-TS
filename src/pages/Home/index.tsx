import Card from '@/components/Card';
import { AppContext } from '@/context/AppContext';
import login from '@/services/login';
import { changeLocalStorage } from '@/services/storage';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface IDados{
  email:string;
  senha:string
}
const Home = () => {
  const navigate = useNavigate();
  const {setIsLoggedIn} = useContext(AppContext);
  const validadeUser = async (dados:IDados) => {

    const loggedIn = await login(dados.email, dados.senha);

    if (!loggedIn) {
      alert('Email ou senha incorretos');
    }

    setIsLoggedIn(loggedIn);
    changeLocalStorage({ login: loggedIn });
    navigate('/conta/1');
  };

  return <Card onSubmit={validadeUser} />;
};

export default Home;
