import { api } from '@/api';

const login = async (email: string, senha: string): Promise<boolean> => {
 
  // biome-ignore lint/suspicious/noExplicitAny: <ignora por enquanto>
   const data: any = await api;
  if (email !== data.email || senha !== data.senha) {
    return false;
  }

  return true;
};

export default login;
