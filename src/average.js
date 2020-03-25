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
  if (arr.length === 0) { return undefined; }

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    }
  }
  const soma = Math.round((arr.reduce((acc, current) => acc + current) / (arr.length)));
  console.log(soma);
  return soma;
};
assert.deepEqual(average(['a']), undefined);
assert.deepStrictEqual(average([1, 2, 3, 4, 5]), 3);
assert.strictEqual(average([1, 3, 'blha']), undefined);
module.exports = average;
