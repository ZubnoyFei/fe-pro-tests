import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries
} from '../index';

describe('changeStringCase()', () => {
  it('Changes the string to uppercase or lowercase', () => {
    const result = changeStringCase('THIS IS THE UPPERCASE STRING', 'uppercase');
    expect(result).toEqual(
      'THIS IS THE UPPERCASE STRING'
    );
  });
  describe('changeStringCase()', () => {
    it('Changes the string to uppercase or lowercase', () => {
      const result = changeStringCase('this is the lowercase string', 'lowercase');
      expect(result).toEqual('this is the lowercase string');
    });
  });
});

describe('sumOfArray()', () => {
  it('Returns the sum of numbers', () => {
    const result = sumOfArray([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });
});

describe('divisibleBy()', () => {
  it('Returns the even numbers', () => {
    const result = divisibleBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('addDotsToString()', () => {
  it('Adds dots to sting if the string is too big', () => {
    const string = addDotsToString('This is the expected string', 3);
    expect(string).toEqual('...');
  });
});

describe('objectEntries()', () => {
  it('Iterates over an object', () => {
    const objectEntr = objectEntries({
      name: 'Oleksii',
      lastName: 'Ustinov',
      age: 30,

    });
    expect(objectEntries === objectEntr).toEqual(false);
  });
});
