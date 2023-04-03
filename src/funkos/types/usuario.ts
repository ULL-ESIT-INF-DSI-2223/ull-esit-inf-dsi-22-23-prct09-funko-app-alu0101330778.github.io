import { funkoCollection } from "../collections/funkocollection.js";

/**
 * Clase usuario
 * @param name Nombre del usuario
 * @param funkoCollection Colección de funkos del usuario
 */
export class usuario {
  private name: string;
  private funkoCollection: funkoCollection;
  /**
   * Constructor de la clase usuario
   * @param name Nombre del usuario
   */
  constructor(name: string) {
    this.name = name;
    this.funkoCollection = new funkoCollection(name);
  }
  /**
   * Getter del nombre del usuario
   * @returns Nombre del usuario
   */
  public getName(): string {
    return this.name;
  }
  /**
   * Getter de la colección de funkos del usuario
   * @returns Colección de funkos del usuario
   */
  public getFunkoCollection(): funkoCollection {
    return this.funkoCollection;
  }
}
