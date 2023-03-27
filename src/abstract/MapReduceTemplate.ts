export abstract class MapReduceTemplate {
  map(list: number[], fn: (x: number) => number): number[] {
    const mappedList: number[] = [];
    list.forEach((x) => {
      mappedList.push(fn(x));
    });
    return mappedList;
  }

  abstract reduce(list: number[]): number;

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