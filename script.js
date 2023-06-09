// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições!
// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) =>
  product.querySelector('span.id').innerText;
console.log(getIdFromProductItem);

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const clearCartStorage = () => localStorage.removeItem('cartItems');

const cartItemClickListener = (event) => {
  event.target.remove();
  clearCartStorage();
};

const loading = () => {
    const h1 = document.createElement('h1');
    h1.innerText = 'carregando...';
  h1.className = 'loading';
     const container = document.querySelector('.container'); 
  container.appendChild(h1);
};

const loadingEnd = async () => {
  const loadingElement = document.querySelector('.loading');
  loadingElement.parentNode.removeChild(loadingElement);
};

const getProducts = async () => {
  const items = document.querySelector('.items');
  const buscaProduto = await fetchProducts('computador');
  buscaProduto.forEach((produto) => {
    items.appendChild(createProductItemElement(produto));
  });
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getClick = async (event) => {
  const product = event.target.parentNode;
  const productId = product.querySelector('.item_id').innerHTML;
  const cartAdd = await fetchItem(productId);
  const contentCart = document.querySelector('.cart__items');
  contentCart.appendChild(createCartItemElement(cartAdd));
};
const getAdd = () => {
  const btnCart = document.getElementsByClassName('item__add');
  for (let i = 0; i < btnCart.length; i += 1) {
    btnCart[i].addEventListener('click', getClick);
  }
};

const clearCart = () => {
  const cartList = document.querySelector('.cart__items');
  const btnClear = document.querySelector('.empty-cart');
  btnClear.addEventListener('click', () => {
    localStorage.clear();
    cartList.innerHTML = '';
  });
};

window.onload = async () => {
  loading();
  await getProducts();
  loadingEnd();
  getAdd();
  clearCart();
};
