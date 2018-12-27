import { add } from './App';


// Unit test (because it onky tests one thing)

test('add', () => {
  const value = add(1, 2)
  expect(value).toBe(3)

  // Or
  expect(add(4, 6)).toBe(10)
})
