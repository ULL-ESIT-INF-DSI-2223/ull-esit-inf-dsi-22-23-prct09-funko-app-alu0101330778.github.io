import { type } from "./type.js";
import { genre } from "./genre.js";

/**
 * Clase funko
 * @param id Identificador del funko
 * @param name Nombre del funko
 * @param description Descripción del funko
 * @param type Tipo del funko
 * @param genre Género del funko
 * @param franchise Franquicia del funko
 * @param number Número del funko
 * @param exclusive Si el funko es exclusivo
 * @param specialFeatures Características especiales del funko
 * @param marketValue Valor de mercado del funko
 */
export class funko {
  protected id: number;
  protected name: string;
  protected description: string;
  protected type: type;
  protected genre: genre;
  protected franchise: string;
  protected number: number;
  protected exclusive: boolean;
  protected specialFeatures: string;
  protected marketValue: number;

  /**
   * Constructor de la clase funko que requiere:
   * @param id Identificador del funko
   * @param name Nombre del funko
   * @param description Descripción del funko
   * @param type Tipo del funko
   * @param genre Género del funko
   * @param franchise Franquicia del funko
   * @param number Número de serie del funko
   * @param exclusive Exclusividad del funko
   * @param specialFeatures Especificaciones especiales del funko
   * @param marketValue Valor de mercado del funko
   */
  constructor(
    id: number,
    name: string,
    description: string,
    type: type,
    genre: genre,
    franchise: string,
    number: number,
    exclusive: boolean,
    specialFeatures: string,
    marketValue: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.genre = genre;
    this.franchise = franchise;
    this.number = number;
    this.exclusive = exclusive;
    this.specialFeatures = specialFeatures;
    this.marketValue = marketValue;
  }

  /**
   * Getter del identificador del funko
   * @returns Identificador del funko
   */
  public getId(): number {
    return this.id;
  }
  /**
   * Getter del nombre del funko
   * @returns Nombre del funko
   */
  public getName(): string {
    return this.name;
  }
  /**
   * Getter de la descripción del funko
   * @returns Descripción del funko
   */
  public getDescription(): string {
    return this.description;
  }
  /**
   * Getter del tipo del funko
   * @returns Tipo del funko
   */
  public getType(): type {
    return this.type;
  }
  /**
   * Getter del género del funko
   * @returns Género del funko
   */
  public getGenre(): genre {
    return this.genre;
  }
  /**
   * Getter de la franquicia del funko
   * @returns Franquicia del funko
   */
  public getFranchise(): string {
    return this.franchise;
  }
  /**
   * Getter del número de serie del funko
   * @returns Número de serie del funko
   */
  public getNumber(): number {
    return this.number;
  }
  /**
   * Getter de la exclusividad del funko
   * @returns Exclusividad del funko
   */
  public getExclusive(): boolean {
    return this.exclusive;
  }
  /**
   * Getter de las características especiales del funko
   * @returns Características especiales del funko
   */
  public getSpecialFeatures(): string {
    return this.specialFeatures;
  }
  /**
   * Getter del valor de mercado del funko
   * @returns El valor de mercado del funko
   */
  public getMarketValue(): number {
    return this.marketValue;
  }
}
