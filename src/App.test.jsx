import { total } from './App';

const add = jest.fn(() => 3);



// Unit test (because it only tests one thing)
test('add', () => {
  // const value = add(1, 2)
  // expect(value).toBe(3)
  // // Or
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
})

// Integration test(test things working together ie functions)
// test('total', () => {
//   expect(total(5, 20)).toBe('$25')
// })

