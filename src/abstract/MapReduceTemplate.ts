
/**
 * Clase abstracta que implementa Template Method para Map y Reduce
 */
export abstract class MapReduceTemplate {
  /**
   * Funcion map por defecto
   * @param list  lista de numeros
   * @param fn Funcion que se le aplica a cada elemento de la lista
   * @returns La lista con la funcion aplicada
   */
  map(list: number[], fn: (x: number) => number): number[] {
    const mappedList: number[] = [];
    list.forEach((x) => {
      mappedList.push(fn(x));
    });
    return mappedList;
  }

  /**
   * Metodo abstracto que se implementa en las clases hijas para realizar el reduce
   * @param list Lista de numeros
   * @returns El resultado del reduce
   */
  abstract reduce(list: number[]): number;

  /**
   * Método que ejecuta Map y Reduce
   * @param list Lista de numeros
   * @param fn Funcion que se le aplica a cada elemento de la lista
   * @returns El resultado del reduce
   */
  execute(list: number[], fn: (x: number) => number): number {
    const mappedList = this.map(list, fn);
    const reducedList = this.reduce(mappedList);
    return reducedList;
  }

  // Hooks para métodos de enganche
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeMap(list: number[], fn: (x: number) => number): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterMap(mappedList: number[]): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeReduce(mappedList: number[]): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterReduce(reducedList: number): void {}
}