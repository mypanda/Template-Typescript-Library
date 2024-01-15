import { print } from '../index'

test('My print function', () => {
  expect(print('Panda')).toBe('Hello Panda')
})