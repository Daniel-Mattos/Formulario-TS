import { AppContext } from '@/context/AppContext';
import { changeLocalStorage } from '@/services/storage';
import { useContext } from 'react';
import { Button } from '../ui/button';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false)
  };
  return (
    <header className="bg-green-700 grid grid-cols-3 items-center p-4">
      <div />
      <h2 className="text-2xl text-white text-center whitespace-nowrap">
        Acessar conta do banco
      </h2>
      <div className="flex justify-end">
        {isLoggedIn && (
          <Button
            variant="destructive"
            className="hover:cursor-pointer"
            onClick={logout}
          >
            Sair
          </Button>
        )}
      </div>
    </header>
  );
};
export default Header;
