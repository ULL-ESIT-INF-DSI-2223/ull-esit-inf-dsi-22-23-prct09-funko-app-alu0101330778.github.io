import { MapReduceTemplate } from "./abstract/MapReduceTemplate";

export class AddMapReduce extends MapReduceTemplate {
  reduce(list: number[]): number {
    let result = 0;
    list.forEach((x) => {
      result += x;
    });
    return result;
  }
}

export class SubMapReduce extends MapReduceTemplate {
  reduce(list: number[]): number {
    let result = 0;
    list.forEach((x) => {
      result -= x;
    });
    return result;
  }
}

export class ProdMapReduce extends MapReduceTemplate {
  reduce(list: number[]): number {
    let result = 1;
    list.forEach((x) => {
      result *= x;
    });
    return result;
  }
}

export class DivMapReduce extends MapReduceTemplate {
  reduce(list: number[]): number {
    let result = 1;
    list.forEach((x) => {
      result /= x;
    });
    return result;
  }
}