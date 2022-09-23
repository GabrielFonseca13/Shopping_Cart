const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {
    saveCartItems();
    expect(localStorage.setItem).toBeCalled();
  })
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, localStorage.setItem é chamado com dois parâmetros, cartItems e o argumento passado para saveCartItems.', () => {
    saveCartItems('cartItems', param2);
    expect(localStorage.setItem);toBeCalledWith('cartItems', param2);
  });
});
