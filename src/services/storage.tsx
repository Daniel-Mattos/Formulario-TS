interface IBank {
  login: boolean;
}

const Bank = {
  login: false,
};
const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('bank');
};

const createLocalStorage = (): void => {
  localStorage.setItem('bank', JSON.stringify(Bank));
};

const changeLocalStorage = (obj: IBank): void => {
  localStorage.setItem('bank', JSON.stringify(obj));
};

export { changeLocalStorage, createLocalStorage, getAllLocalStorage };
