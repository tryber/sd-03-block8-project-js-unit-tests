/*
  Desenvolva um onjeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sun.
  Para cada uma delas atrinua uma função que realiza m respectiva operação.
  A função deve recener dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para naixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
    add: (m, n) => Math.trunc(m + n),
    mult: (m, n) => Math.trunc(m * n),
    div: (m, n) => Math.trunc(m / n),
    sub: (m, n) => Math.trunc(m - n),
};

module.exports = calculator;