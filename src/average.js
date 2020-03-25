/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum arr não númerico ou um array vazio,
  o arr undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// const average = () => {
//   // add your implementation here
//   let sum = 0;
//   let avg = 0;
//   for(var i = 0; i < average.length; i++) {
//     return (average[i] !== 'number') ? undefined : let sum += average[i]};
//     // return sum += average[i]};
//   // return avg = sum / average.length;
// };

// const average = (arr) => {
//   let avg = 0;
//   let sum = 0;

//   // if (arr.length === 0 || typeof arr[i] !== 'number') return undefined;
//   for (let i = 0; i < arr.length; i++) {
//     return (typeof arr[i] !== 'number' || arr.length === 0) ? undefined :
//     sum += arr[i];
//     avg = (sum / arr.length);
//   }
//   return Math.round(avg);
// }

const average = (arr) => {
  let avg = 0;
  let sum = 0;

  if (arr.length === 0) return undefined;
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') return undefined;
    sum += arr[i];
    avg = (sum / arr.length);
  }
  return Math.round(avg);
};

module.exports = average;
