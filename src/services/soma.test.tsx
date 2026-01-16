import { describe, expect, it } from 'vitest';
import { multiplica, soma } from './soma';

describe('testando soma', () => {
  it('deve somar 1 ao numero informado', () => {
    const value = soma(1);
    expect(value).toBe(2);
  });

  it('deve multiplicar 2x ao numero informado', () => {
    const value = multiplica(2);
    expect(value).toBe(4);
  });
});
