const assert = require('chai').assert;
global.window = global;
require('../src/js/validate.js');

//Validar que el input contenga texto
describe('Validar campo de texto', () => { //Describe lo que habrá dentro de cada función
  describe('Debería verificar que se ingrese texto en el input de agregar lista', () => {
      it('Se debería ingresar al menos 1 caracter', () => {
          assert.equal(validateInputText('c'), true);
          assert.equal(validateInputText('Carolina'), true);
          assert.equal(validateInputText('Caro123'), true)
          assert.equal(validateInputText(123), true)
          assert.equal(validateInputText(''), false);
      });
});
});