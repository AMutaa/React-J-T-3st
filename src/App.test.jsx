import { total } from './App';
import { add } from './Add';

jest.mock('./Add', () => ({
  add: jest.fn(() => 25)
}))

// Integration test(test things working together ie functions)

test('total', () => {
  expect(total(5, 20)).toBe('$25');
  expect(add).toHaveBeenCalledTimes(1);

  //Redundant
  add.mockImplementation(() => 30);
  expect(total(5, 25)).toBe('$30');
  expect(add).toHaveBeenCalledTimes(2)
})

