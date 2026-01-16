import login from '@/services/login';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Card = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <form
      onSubmit={() => login(email, senha)}
      className="flex flex-col max-w-lg bg-violet-300 p-4 rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-4">Faça seu login</h2>
      <label htmlFor="emailInput">Digite seu email:</label>
      <Input
        id="emailInput"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="passwordInput" className="mt-4">
        Digite sua senha:
      </label>
      <Input
        id="passwordInput"
        placeholder="Password"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Button className="mt-4" type="submit">
        Enviar
      </Button>
    </form>
  );
};
export default Card;
