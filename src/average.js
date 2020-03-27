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

// const average = (valor) => {
//   let media = 0;
//   let resultado = 0;

//   if (valor.length == 0) {
//     return undefined;
//   } else {
//     for (let i = 0; i < valor.length; i++) {
//       if (typeof valor[i] === 'number') {
//         resultado += valor[i];
//         media = (resultado / valor.length);
//       } else {
//         return undefined;
//       }
//     }
//     return Math.round(media);
//     //return console.log(Math.round(media));
//   }
// }

const average = (valor) => {
  let media = 0;
  let resultado = 0;

  if (valor.length === 0) return undefined;
  for (let i = 0; i < valor.length; i += 1) {
    if (typeof valor[i] !== 'number') return undefined;
    resultado += valor[i];
    media = (resultado / valor.length);
  }
  return Math.round(media);
};

module.exports = average;
