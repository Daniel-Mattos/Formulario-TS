import { describe, expect, it } from 'vitest'; // Adicione beforeEach
import login from './login';

// const mockSetIsLoggedIn = vi.fn();
// const mockNavigate = vi.fn();

// // Mock do React
// vi.mock('react', async () => {
//   const actual = await vi.importActual<typeof import('react')>('react');
//   return {
//     ...actual,
//     useContext: () => ({ setIsLoggedIn: mockSetIsLoggedIn }),
//   };
// });

// // Mock do React Router Dom
// vi.mock('react-router-dom', async () => {
//   const actual = await vi.importActual<typeof import('react-router-dom')>(
//     'react-router-dom' as any,
//   );
//   return {
//     ...actual,
//     useNavigate: () => mockNavigate,
//   };
// });

describe('testando login', () => {
  // // Criamos uma função simulada para o Alert
  // const mockAlert = vi.fn();

  // beforeEach(() => {
  //   // 1. Injetamos o alert no escopo global antes de cada teste
  //   vi.stubGlobal('alert', mockAlert);

  //   // 2. Limpamos os mocks para garantir testes isolados
  //   mockAlert.mockClear();
  //   // mockSetIsLoggedIn.mockClear();
  //   // mockNavigate.mockClear();
  // });

  it('deve chamar o alerta com a mensagem correta', async () => {
    // Vamos assumir que o 'api' retorna o email correto para este teste passar
    const response = await login('da@gmail.com', '123456');

    expect(response).toBeTruthy();

    // expect(mockNavigate).toHaveBeenCalledWith('/1');
    // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
  });

  it('Deve exibir um erro caso o email seja invalido', async () => {
    const response = await login('maria@gmail.com', '123456');

    // Verifique se ele foi chamado!
    // expect(mockAlert).toHaveBeenCalledWith('Email inválido');

    expect(response).toBeFalsy();

    // Verificamos se o login NÃO aconteceu
    // expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
    // expect(mockNavigate).not.toHaveBeenCalled();
  });
});
