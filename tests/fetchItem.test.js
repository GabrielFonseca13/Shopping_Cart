require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Teste se fetch foi chamada, Executando a função fetchItem com o argumento do item "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('Teste se, ao chamar função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint correto', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Teste se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const expectObject = await fetchItem('MLB1615760527');
    expect(expectObject).toEqual(item);
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    try {
      await await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error ('You must provide an url'));
    }
  });
});
