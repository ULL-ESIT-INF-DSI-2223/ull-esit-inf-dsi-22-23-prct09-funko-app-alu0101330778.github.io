import { expect } from 'chai';
import 'mocha';
import { funko } from '../../../src/funkos/types/funko.js';
import { genre } from '../../../src/funkos/types/genre.js';
import { type } from '../../../src/funkos/types/type.js';

const genero: genre = genre.MUSIC
const tipo: type = type.POP
const funkotest = new funko( 5, "Funko5", "Funko5 description", tipo , genero, "Funko5 franchise", 5, true, "Funko5 special features", 75);

describe('Testeo de la Clase Funko', () => {
    it('Comprobamos el id del funko', () => {
        expect(funkotest.getId()).to.equal(5);
    });
    it('Comprobamos el nombre del funko', () => {
        expect(funkotest.getName()).to.equal("Funko5");
    });
    it('Comprobamos la descripción del funko', () => {
        expect(funkotest.getDescription()).to.equal("Funko5 description");
    });
    it('Comprobamos el tipo del funko', () => {
        expect(funkotest.getType()).to.equal(tipo);
    });
    it('Comprobamos el género del funko', () => {
        expect(funkotest.getGenre()).to.equal(genero);
    });
    it('Comprobamos la franquicia del funko es la correcta', () => {
        expect(funkotest.getFranchise()).to.equal("Funko5 franchise");
    });
    it('Comprobamos el número del funko', () => {
        expect(funkotest.getNumber()).to.equal(5);
    });
    it('Comprobamos el exclusivo del funko', () => {
        expect(funkotest.getExclusive()).to.equal(true);
    });
    it('Comprobamos las características especiales del funko', () => {
        expect(funkotest.getSpecialFeatures()).to.equal("Funko5 special features");
    });
    it('Comprobamos el valor de mercado del funko', () => {
        expect(funkotest.getMarketValue()).to.equal(75);
    });

});
