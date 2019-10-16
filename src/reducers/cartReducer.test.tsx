import cartReducer from './cartReducer';

test('default state', () => {
  expect(cartReducer([], { type: '' })).toStrictEqual([])
})

// TDD