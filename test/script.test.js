const {hello} = require('../script.js');

test('hello() should work correctly', () => {
  expect(hello('Grace')).toBe('Hello World Grace!');
});