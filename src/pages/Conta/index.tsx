import { api } from '@/api';
import InfoCard from '@/components/InfoCard';
import { Loader } from '@/components/ui/loader';
import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface IUser {
  email: string;
  senha: string;
  name: string;
  saldo: number;
  id: string;
}
const Conta = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [user, setUser] = useState<null | IUser>();
  const { isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    !isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const getData = async () => {
      const data: any | IUser = await api;
      setUser(data);
    };

    getData();
  }, []);

  useEffect(() => {
    if (user && params.id !== user.id) {
      navigate('/');
    }
  }, [user, params.id, navigate]);

  const atualData = new Date();
  const dia = atualData.getDate();
  const mes = atualData.getMonth() + 1;
  const ano = atualData.getFullYear();
  const hours = atualData.getHours();
  const minutes = atualData.getMinutes();

  return (
    <div className="flex flex-row gap-4">
      {!user ? (
        <Loader text="Carrengado dados..." />
      ) : (
        <>
          <InfoCard
            mainContent={`Bem vindo ${user?.name}`}
            secondaryContent={`${dia}/${mes}/${ano} ${hours}:${minutes}`}
          />
          <InfoCard
            mainContent={`Saldo`}
            secondaryContent={`R$ ${user?.saldo}`}
          />
        </>
      )}
    </div>
  );
};
export default Conta;
