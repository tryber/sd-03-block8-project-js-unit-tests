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

const average = (arr) => {
  let soma = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if ( typeof (arr[i]) === 'number') {
      soma += arr[i];
    } else {
      return undefined;
    }
  }
  return Math.round(soma / arr.length);  
};

const n = [1, 2];
const n1 = [0, 0, 0, 1];
const n2 = [];

console.log(average(n1));

module.exports = average;
