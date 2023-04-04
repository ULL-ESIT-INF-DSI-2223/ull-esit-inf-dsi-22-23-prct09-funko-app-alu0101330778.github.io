import { expect } from 'chai';
import 'mocha';
import { funkoCollection } from '../../../src/funkos/collections/funkocollection.js';
import { funko } from '../../../src/funkos/types/funko.js';
import { funkoSchema } from '../../../src/funkos/schema/funkoSchema.js';
import { genre } from '../../../src/funkos/types/genre.js';
import { type } from '../../../src/funkos/types/type.js';
const funkoCollectiontest = new funkoCollection("Test");
const funko1: funkoSchema = {
    id: 5,
    name: "Funko5",
    description: "Funko5 description",
    type: type.POP,
    genre: genre.MUSIC,
    franchise: "Funko5 franchise",
    number: 5,
    exclusive: true,
    specialFeatures: "Funko5 special features",
    marketValue: 75
}
const funko2: funkoSchema = {
    id: 6,
    name: "Funko6",
    description: "Funko6 description",
    type: type.POP,
    genre: genre.MUSIC,
    franchise: "Funko6 franchise",
    number: 6,
    exclusive: true,
    specialFeatures: "Funko6 special features",
    marketValue: 110
}
const funko3: funkoSchema = {
    id: 20,
    name: "Funko20",
    description: "The best Sonic Funko ever",
    type: type.POP,
    genre: genre.MOVIES_TV,
    franchise: "Sonic",
    number: 1,
    exclusive: false,
    specialFeatures: "None",
    marketValue: 100
}
const funko4: funko = new funko(21, "Funko21", "The best Sonic Funko ever", type.POP, genre.MOVIES_TV, "Sonic", 1, false, "None", 100);
const funko3Modificado: funko = new funko(20, "Funko20Modi", "The best Sonic Funko everModi", type.POP, genre.MOVIES_TV, "Sonic", 1, false, "None", 150);
const funko3Normal: funko = new funko(20, "Funko20", "The best Sonic Funko ever", type.POP, genre.MOVIES_TV, "Sonic", 1, false, "None", 100);
const funko4Schema: funkoSchema = {
    id: 21,
    name: "Funko21",
    description: "The best Sonic Funko ever",
    type: type.POP,
    genre: genre.MOVIES_TV,
    franchise: "Sonic",
    number: 1,
    exclusive: false,
    specialFeatures: "None",
    marketValue: 100
}
const funko3ModiSchema: funkoSchema = {
    id: 20,
    name: "Funko20Modi",
    description: "The best Sonic Funko everModi",
    type: type.POP,
    genre: genre.MOVIES_TV,
    franchise: "Sonic",
    number: 1,
    exclusive: false,
    specialFeatures: "None",
    marketValue: 150
}

const listafunkos: funkoSchema[] = [funko1, funko2, funko3];
const listafunkos2: funkoSchema[] = [funko1, funko2, funko3, funko4Schema];
const listafunkos3: funkoSchema[] = [funko1, funko2, funko3ModiSchema];

describe('Testeo de la Clase funkoCollection', () => {
  it('listFunkos() debería de devolver un array con los funkoSchema', () => {
    const result = funkoCollectiontest.listFunkos();
    expect(result).to.deep.equal(listafunkos);
  });
  it('addFunko() debería de devolver un array con los funkoSchema', () => {
    const result = funkoCollectiontest.addFunko(funko4);
    expect(result).to.deep.equal(listafunkos2);
  });
  it ('removeFunko() debería de devolver un array con los funkoSchema', () => {
    const result = funkoCollectiontest.removeFunko(21);
    expect(result).to.deep.equal(listafunkos);
  });
  it ('readFunko() debería de devolver un funkoSchema', () => {
    const result = funkoCollectiontest.readFunko(5);
    expect(result).to.deep.equal(funko1);
  });
  it ('updateFunko() debería de devolver un array con los funkoSchema', () => {
    const result = funkoCollectiontest.updateFunko(funko3Modificado);
    expect(result).to.deep.equal(listafunkos3);
    funkoCollectiontest.updateFunko(funko3Normal);
  });
});


