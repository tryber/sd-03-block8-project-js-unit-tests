/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require("assert");
const circle = require("../src/circle");

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe("#circle", () => {
  it("given a radius, should return an object with circles info", () => {
    assert.fail();
    assert.equal(typeof circle == "object");
    assert.equal();
    assert.equal(circle() == undefined);
    assert.equal();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle é um objeto.
    // Teste se o objeto circle tem 3 entradas.
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
  });
});
