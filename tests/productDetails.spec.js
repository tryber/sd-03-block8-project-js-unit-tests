/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual( Array.isArray(productDetails('Alcool gel', 'Máscara')),true);
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length,2);
    assert.strictEqual(typeof(productDetails('Alcool gel', 'Máscara')[0]),'object');
    assert.strictEqual(typeof(productDetails('Alcool gel', 'Máscara')[1]),'object');
    let object = (productDetails('Alcool gel', 'Máscara'));
    assert.strictEqual(object[0] === object[1],false);
    let producyTd = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    assert.strictEqual(producyTd.substr((producyTd.length-3),3) == '123',true);
    let producyTd2 = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    assert.strictEqual(producyTd2.substr((producyTd2.length-3),3) == '123',true);
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
