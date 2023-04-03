import { expect } from 'chai';
import 'mocha';
import { usuario } from '../../../src/funkos/types/usuario.js';
import { funko } from '../../../src/funkos/types/funko.js';


const usuariotest = new usuario("Test");
const funkoarray: funko[] = [];

describe('Usuario', () => {
    it('Comprobamos el nombre del usuario', () => {
        const result = usuariotest.getName();
        expect(result).to.equal("Test");
    });
    it('Getter la colección de funkos del usuario', () => {
        const result = usuariotest.getFunkoCollection().getFunkos();
        expect(result).to.be.deep.equal(funkoarray);
    });
});

  