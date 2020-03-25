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
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.

    assert.ok(Array.isArray(productDetails()));

    // Teste que o array retornado pela função contém dois itens dentro.

    assert.equal(productDetails().length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.

    assert.ok(typeof productDetails()[0] === 'object');
    assert.ok(typeof productDetails()[1] === 'object');

    // Teste que os dois objetos são diferentes entre si.

    const product = 'Luva'
    assert.notDeepEqual(productDetails(product)[0], productDetails(product)[1]);

    // (Difícil) Teste que os dois productIds terminam com 123.

    const finalWord = (word) => {
      let lettersWord = '';
      for (let i = word.length - 3; i < word.length; i += 1) {
        lettersWord += word[i];
      }
      return lettersWord;
    }

    assert.equal(finalWord(productDetails()[0].details.productId), finalWord(productDetails()[1].details.productId));

  });
});
