const getSavedCartItems = () => {
  const itemCart = localStorage.getItem('cartItems');
  return itemCart;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
