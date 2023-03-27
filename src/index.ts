import { AddMapReduce, DivMapReduce } from './MapReduce';
import { MapReduceTemplate } from './abstract/MapReduceTemplate';


const list = [1, 2, 3, 4, 5];

const addMapReduce = new AddMapReduce();
const result = addMapReduce.execute(list, (x) => x * 2);
console.log(result); // 30

const divMapReduce = new DivMapReduce();

const result2 = divMapReduce.execute(list, (x) => x);
divMapReduce.afterReduce(result2);
console.log(result2); // 0.3125