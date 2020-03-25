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
  arr = arr.map(Number);
  for (i = 0; i <= arr.legth; =+1) {
    const total =+ arr[i];
    if (i = arr.legth) {
      return Math.round(total / i);
    } 
      return 'undefined';
  }
  return average;
};
const array1 = average([1, 2]);
const array2 = average([1, 2, 3, 4, 5]);
const array3 = average([1, 2, '3']);

module.exports = average;
assert.strictEqual(array1, 1);
assert.strictEqual(array2, 7);
assert.strictEqual(array3, undefined);
