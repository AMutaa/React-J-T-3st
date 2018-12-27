import { add } from './Add'

// Unit test (because it only tests one thing)
test('add', () => {
  // const value = add(1, 2)
  // expect(value).toBe(3)
  // // Or
  expect(add(1, 2)).toBe(3);
  expect(add(5, 2)).toBe(7);
})