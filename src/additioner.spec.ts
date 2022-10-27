
import Additioner from './additioner';

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    const add = new Additioner()
    add.inc(3)
    expect(add.getResult()).toBe(3);
  });
});

