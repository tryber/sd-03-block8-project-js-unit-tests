/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const assert = require('assert');

const average = (arr) => {




  let soma = 0;
  let divisao = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }

  divisao = soma / arr.length;
  return divisao;
};

let saida = average([10, 10, 10]);
assert.strictEqual(10, saida);

saida = average("string");
assert.strictEqual(undefined, saida);

saida = average([]);
assert.strictEqual(0, saida);

saida = average([10, "1", 10]);
assert.strictEqual(undefined, saida);

assert.strictEqual(typeof average, 'function');


module.exports = average;
