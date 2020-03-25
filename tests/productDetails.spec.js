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
    assert.equal(Array.isArray(productDetails()), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.equal(productDetails('Alcool gel', 'Mascara').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepEqual(typeof(Object.values(productDetails())),'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepEqual(Object.values(productDetails('Alcool gel','Mascara'))[0], Object.values(productDetails(1,2))[1])
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepEqual([(Object.values(productDetails('Alcool gel','Mascara'))[0].details.productId).slice(((Object.values(productDetails('Alcool gel','Mascara'))[0].details.productId).length)-3,((Object.values(productDetails('Alcool gel','Mascara'))[0].details.productId).length)+1),(Object.values(productDetails('Alcool gel','Mascara'))[1].details.productId).slice(((Object.values(productDetails('Alcool gel','Mascara'))[1].details.productId).length)-3,((Object.values(productDetails('Alcool gel','Mascara'))[1].details.productId).length)+1)],[123, 123])
  });
});




let a =[
  {
    name: 'Alcool gel',
    details: {
      productId: 'Alcool gel123'
    }
  },
  {
    name: 'Máscara',
    details: {
      productId: 'Máscara123'
    }
  }
]

console.log(Object.values(a)[0].details.productId)
console.log(((Object.values(a)[0].details.productId).length)-3)
console.log(((Object.values(a)[0].details.productId).length)+1)
console.log((Object.values(a)[0].details.productId).slice(10,14))
console.log((Object.values(a)[0].details.productId).slice(((Object.values(a)[0].details.productId).length)-3,((Object.values(a)[0].details.productId).length)+1))
console.log((Object.values(a)[1].details.productId).slice(((Object.values(a)[1].details.productId).length)-3,((Object.values(a)[1].details.productId).length)+1))

console.log([(Object.values(a)[0].details.productId).slice(((Object.values(a)[0].details.productId).length)-3,((Object.values(a)[0].details.productId).length)+1),(Object.values(a)[1].details.productId).slice(((Object.values(a)[1].details.productId).length)-3,((Object.values(a)[1].details.productId).length)+1)])


console.log([(Object.values(productDetails('Alcool gel','Mascara'))[0].details.productId).slice(((Object.values(productDetails('Alcool gel','Mascara'))[0].details.productId).length)-3,((Object.values(productDetails('Alcool gel','Mascara'))[0].details.productId).length)+1),(Object.values(productDetails('Alcool gel','Mascara'))[1].details.productId).slice(((Object.values(productDetails('Alcool gel','Mascara'))[1].details.productId).length)-3,((Object.values(productDetails('Alcool gel','Mascara'))[1].details.productId).length)+1)])
console.log(


let a =[
  {
    name: 'Alcool gel',
    details: {
      productId: 'Alcool gel123'
    }
  },
  {
    name: 'Máscara',
    details: {
      productId: 'Máscara123'
    }
  }
]

console.log(a)
console.log(a[0].name)
console.log(a.name)