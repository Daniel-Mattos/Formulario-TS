import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';
import { Button } from '../ui/button';

const Header = () => {
  const {isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  return (
    <header className="bg-green-700 grid grid-cols-3 items-center p-4">
      <div/>
      <h2 className="text-2xl text-white text-center whitespace-nowrap">Acessar conta do banco</h2>
      <div className='flex justify-end'>
        {isLoggedIn && <Button variant="destructive" className='hover:cursor-pointer' onClick={() => setIsLoggedIn(false)}>Sair</Button>}
      </div>
    </header>
  );
};
export default Header;
