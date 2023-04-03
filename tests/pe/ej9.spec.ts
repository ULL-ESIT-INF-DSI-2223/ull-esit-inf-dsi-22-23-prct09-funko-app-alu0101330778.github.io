import { expect } from 'chai';
import 'mocha';
import { AddMapReduce, DivMapReduce, ProdMapReduce, SubMapReduce } from '../../src/pe/MapReduce.js';

const list = [1, 2, 3, 4, 5];
const addMapReduce = new AddMapReduce();
const result = addMapReduce.execute(list, (x) => x * 2);
console.log(result); // 30

const divMapReduce = new DivMapReduce();
const result2 = divMapReduce.execute(list, (x) => x);
console.log(result2);

const prodMapReduce = new ProdMapReduce();
const result3 = prodMapReduce.execute(list, (x) => x * 2);
console.log(result3);

const subMapReduce = new SubMapReduce();
const result4 = subMapReduce.execute(list, (x) => x * 2);
console.log(result4);


describe('MapReduceTemplate', () => {
  it('should return 30', () => {
    expect(result).to.equal(30);
  });
  it('should return 0.0083', () => {
    expect(result2).to.equal(0.008333333333333333);
  });
  it('should return 3840', () => {
    expect(result3).to.equal(3840);
  });
  it('should return -30', () => {
    expect(result4).to.equal(-30);
  });

});