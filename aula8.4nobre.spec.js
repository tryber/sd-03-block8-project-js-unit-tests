/* eslint-disable max-len */

const assert = require('assert');
// const average = require('../src/aula8.4nobre');

const verificaMult = (a) => {
    if (a == 3) {
        return true;
    }else {
        return false;
    }
}




assert.equal(verificaMult(3), true)

// describe('#numbers', () => {
//     it('should return an array and return if it has only numbers or not', () => {
//       const a = [1, 2, 3, 4, 5];
//       const b = [1, 2, '3', 4, 5];
//       const c = [1, 'a', 3];
//       const d = [' '];
//       assert.strictEqual(numbers(a), true);
//       assert.strictEqual(numbers(b), false);
//       assert.strictEqual(numbers(c), false);
//       assert.strictEqual(numbers(d), false)
//       // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
//       // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
//       // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
//       // Escreva um teste em que a função recebe [' '] e retorna false
//     });
//   });