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

  const meuRestauanrte = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

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
     // assert.fail();
     // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
     // ```
     // createMenu(objetoQualquer) // Retorno: { fetchMenu: objetoQualquer }
      const objetoQualquer1 = {};
      assert.deepEqual(createMenu(objetoQualquer1).fetchMenu, objetoQualquer1, 'Não são objetos estritamente iguais');
      // ```
      // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
      // --------------------------------------------------------------------------------------
      // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
      // ```
      // const objetoRetornado = createMenu(objetoQualquer);
      // objetoRetornado.fetchMenu // Retorno: { food: {}, drink: {}}
      const  objetoQualquer = {
        food: {},
        drink: {},
      };
      assert.deepEqual(Object.keys(createMenu(objetoQualquer).fetchMenu),['food', 'drink' ]);
      // ```
      // Agora faça o TESTE 3 deste arquivo.
      // --------------------------------------------------------------------------------------
      // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
      // ```
      const objetoRetornado = createMenu(objetoQualquer);
      // objetoRetornado.fetchMenu // Retorno: objetoQualquer
      assert.strictEqual(objetoRetornado.fetchMenu, objetoQualquer);
      // ```
      // Agora faça o TESTE 4 deste arquivo.
      // --------------------------------------------------------------------------------------
      // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
      // ```
      // const objetoRetornado = createMenu(objetoQualquer);
      // objetoRetornado.consumption // Retorno: []
      assert.deepStrictEqual(objetoRetornado.consumption, []);
    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```;
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.comsuption // Retorno: ["coxinha"]
    objetoRetornado.order('coxinha');
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha']);
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    // objetoRetornado.order("coxinha"); Já adicionado acima
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // ```
    assert.deepStrictEqual(objetoRetornado.consumption.slice(-4), ["coxinha", "agua", "sopa", "sashimi"]);
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    assert.deepStrictEqual(objetoRetornado.consumption.slice(-3), ['coxinha', 'agua', 'coxinha']);
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    const  objeto8 = {
      food: {
        'peixe': 17,
        'salada': 2,
        'sopa': 3,
        'sashimi': 13,
        'coxinha': 5,
      },
      drink: {
        'agua': 5,
        'wiskey': 19,
        'suco': 11,
      }
    };
    const objetoRetornado8 = createMenu(objeto8);

    objetoRetornado8.order('coxinha');
    objetoRetornado8.order('agua');
    objetoRetornado8.order('coxinha');
    assert.strictEqual(objetoRetornado8.pay(), parseFloat((15 * 1.1).toFixed(2)));

    objetoRetornado8.order('sashimi');
    assert.strictEqual(objetoRetornado8.pay(), parseFloat((28 * 1.1).toFixed(2)));

    objetoRetornado8.order('sashimi');
    objetoRetornado8.order('wiskey');
    objetoRetornado8.order('suco');
    assert.strictEqual(objetoRetornado8.pay(), parseFloat((71 * 1.1).toFixed(2)));

    objetoRetornado8.order('wiskey');
    objetoRetornado8.order('suco');
    objetoRetornado8.order('sopa');
    assert.strictEqual(objetoRetornado8.pay(), parseFloat((104 * 1.1).toFixed(2)));
    // Retorno: somaDosPreçosDosPedidos
    // ```
    // assert.strictEqual(objetoRetornado.pay(), )
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
