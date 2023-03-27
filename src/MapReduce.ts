import { MapReduceTemplate } from "./abstract/MapReduceTemplate";

/**
 * Clase hija de MapReduceTemplate que implementa el metodo reduce sumando cada elemento de la lista
 */
export class AddMapReduce extends MapReduceTemplate {
  reduce(list: number[]): number {
    let result = 0;
    list.forEach((x) => {
      result += x;
    });
    return result;
  }
}

/**
 * Clase hija de MapReduceTemplate que implementa el metodo reduce restando cada elemento de la lista
 */
export class SubMapReduce extends MapReduceTemplate {
  reduce(list: number[]): number {
    let result = 0;
    list.forEach((x) => {
      result -= x;
    });
    return result;
  }
}

/**
 * Clase hija de MapReduceTemplate que implementa el metodo reduce multiplicando cada elemento de la lista
 */
export class ProdMapReduce extends MapReduceTemplate {
  reduce(list: number[]): number {
    let result = 1;
    list.forEach((x) => {
      result *= x;
    });
    return result;
  }
}

/**
 * Clase hija de MapReduceTemplate que implementa el metodo reduce dividiendo cada elemento de la lista
 */
export class DivMapReduce extends MapReduceTemplate {
  reduce(list: number[]): number {
    let result = 1;
    list.forEach((x) => {
      result /= x;
    });
    return result;
  }
}