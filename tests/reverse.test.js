//import function to be tested
const reverse = require('../utils/for_testing').reverse

//test -> individual test case, description, function
test('reverse of a', () => {
  const result = reverse('a')

  expect(result).toBe('a')
})

test('reverse of react', () => {
  const result = reverse('react')

  expect(result).toBe('tcaer')
})

test('reverse of releveler', () => {
  const result = reverse('releveler')

  expect(result).toBe('releveler')
})

//failing example
test('palindrome of react', () => {
  const result = reverse('react')

  expect(result).toBe('tkaer')
})








/*
Expect wraps the resulting value into an object that offers a
collection of matcher functions

*/