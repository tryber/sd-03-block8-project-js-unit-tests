/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    // createMenu(objetoQualquer) // Retorno: { fetchMenu: objetoQualquer }
    const teste1 = createMenu({});
    const comparador = Object.entries(teste1);
    assert.deepStrictEqual(Object.entries(teste1), comparador);
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu // Retorno: { food: {}, drink: {}}
    const objetoRetornado = createMenu({ food: {}, drink: {} });
    const teste2 = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(objetoRetornado.fetchMenu, teste2.fetchMenu);
    // Agora faça o TESTE 3 deste arquivo.
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    const teste3 = createMenu({ food: {}, drink: {} });
    const compararMenu = JSON.stringify(teste3.fetchMenu);
    const compararRetornado = JSON.stringify(objetoRetornado.fetchMenu);
    assert.strictEqual(compararMenu, compararRetornado) // Retorno: objetoQualquer
    // Agora faça o TESTE 4 deste arquivo.
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    const teste4 = createMenu({});
    const valorTeste4 = Object.values(teste4.consumption);
    assert.strictEqual(valorTeste4.length, 0);
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```;
    const objetoTeste5 = createMenu({});
    objetoTeste5.order('coxinha');
    const comparar5 = objetoTeste5.consumption;
    const teste5 = ['coxinha'];
    assert.deepStrictEqual(objetoTeste5.consumption, teste5);
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.

    objetoTeste6 = createMenu({});
    objetoTeste6.order("coxinha");
    objetoTeste6.order("agua");
    objetoTeste6.order("sopa");
    objetoTeste6.order("sashimi");
    const teste6 = objetoTeste6.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    const saida6 = ['coxinha', 'agua', 'sopa', 'sashimi'];
    assert.deepStrictEqual(teste6, saida6);

    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.

    objetoTeste7 = createMenu({});
    objetoTeste7.order("coxinha");
    objetoTeste7.order("agua");
    objetoTeste7.order("coxinha");
    const teste7 = objetoTeste7.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    const saida7 = ['coxinha', 'agua', 'coxinha'];
    assert.deepStrictEqual(teste7, saida7);

    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    objetoTeste8 = createMenu({ food: { 'coxinha': 3.9, 'sopa': 9.9 }, drink: { 'agua': 3.9, 'cerveja': 6.9 } });
    objetoTeste8.order('coxinha');
    objetoTeste8.order('agua');
    objetoTeste8.order('coxinha');
    const totalApagar = objetoTeste8.pay() // Retorno: somaDosPreçosDosPedidos
    const totalDeveriaSer = 11.7
    assert.deepEqual(totalApagar, totalDeveriaSer);
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
