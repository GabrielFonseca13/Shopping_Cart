const saveCartItems = (param2) => localStorage.setItem('param1', param2);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
