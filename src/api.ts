const conta = {
  email: 'da@gmail.com',
  senha: '123456',
  name: 'Daniel Mattos',
  saldo: 100,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
