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


const average = (array) => {
  const test = (!array.some(i => !Number.isInteger(i))); // ver se é num

  if (test === false || array.length === 0 || array === null) { console.log('undefined'); }

  const soma = (a, b) => a + b;
  const result = Math.round(array.reduce(soma) / array.length);

  return result;
};

average([11, 2, 5]);

module.exports = average;
