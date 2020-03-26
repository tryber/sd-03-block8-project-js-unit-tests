/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não forss especificado um raio, a função retorna undefined.
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
aa
  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    const estudante = createStudent('Leandrão, o Lobo Solitário');
    assert.strictEqual(typeof estudante, 'object');
    assert.strictEqual(typeof estudante.feedback, 'function');
    assert.strictEqual(estudante.name, 'Leandrão, o Lobo Solitário');
    assert.strictEqual(estudante.feedback(), 'Eita pessoa boa!');

    const estudante2 = createStudent('Nobre');
    assert.strictEqual(typeof estudante2, 'object');
    assert.strictEqual(typeof estudante2.feedback, 'function');
    assert.strictEqual(estudante2.name, 'Nobre');
    assert.strictEqual(estudante2.feedback(), 'Eita pessoa boa!');

    const estudante3 = createStudent('Inácio');
    assert.strictEqual(typeof estudante3, 'object');
    assert.strictEqual(typeof estudante3.feedback, 'function');
    assert.strictEqual(estudante3.name, 'Inácio');
    assert.strictEqual(estudante3.feedback(), 'Eita pessoa boa!');
  });
});