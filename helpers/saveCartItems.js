const saveCartItems = (param2) => localStorage.setItem('cartItems', param2);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
