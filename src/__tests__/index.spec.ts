import { subtract } from '../index';

describe('index', () => {
  it('subtract', () => {
    expect.assertions(3);

    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2, 2)).toBe(0);
    expect(subtract(-4, 2)).toBe(-6);
  });
});
