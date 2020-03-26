/* eslint-disable max-len */

/*
  Essa função recebe o raio de um círculo,
  retornando um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.
  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}
  DICA: Números de ponto flutuante em JavaScript são imprecisos! Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/
/*
function roundToTwo(num) {
  const numero = `${num}e+2`;
  return +(`${Math.round(numero)}e-2`);
} //
*/

const circle = (num) => {
  const PI = 3.14;
  if (!num) { return undefined; }
  return {
    area: parseFloat((PI * num * num).toFixed(2)), // roundToTwo(PI * num * num), // parseFloat((PI * num * num).toPrecision(5)),
    circumference: parseFloat((2 * PI * num).toFixed(5)), // roundToTwo(2 * PI * num), // parseFloat((2 * PI * num).toPrecision(5)),
    radius: num,
  };
};

module.exports = circle;
