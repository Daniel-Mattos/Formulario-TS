// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest';
import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from './storage';

const Bank = {
  login: false,
};

describe('testando storage', () => {

  const setItem = vi.spyOn(Storage.prototype, 'setItem');
  it('deve retornar o objeto do localStorage com o nome bank', () => {
    const getItem = vi.spyOn(Storage.prototype, 'getItem');
    getAllLocalStorage();
    expect(getItem).toHaveBeenCalledWith('bank');
  });

  it('Deve criar o objeto no localStorage', () => {
    createLocalStorage();
    expect(setItem).toHaveBeenCalledWith('bank', JSON.stringify(Bank));
  });

  it('Deve alterar o valor do objeto no localStorage', () => {
    changeLocalStorage(Bank)
    expect(setItem).toHaveBeenCalledWith('bank', JSON.stringify(Bank));
  })
});
