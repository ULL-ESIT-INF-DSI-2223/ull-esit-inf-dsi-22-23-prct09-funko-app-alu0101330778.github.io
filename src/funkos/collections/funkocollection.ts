import { funko } from "../types/funko.js";
import fs from "fs";
import chalk from "chalk";
import { funkoSchema } from "../schema/funkoSchema.js";

/**
 * FunkoCollection: Clase que representa una colección de Funkos
 * @class funkoCollection
 * @param funkos Array de funkos
 * @param path Ruta del fichero json
 * @param propietario Nombre del usuario
 */
export class funkoCollection {
  public funkos: funko[] = [];
  protected path: string;
  private propietario: string;
  /**
   * Constructor de la clase funkoCollection
   * Crea la ruta del fichero json
   * @param propietario Nombre del usuario
   */
  constructor(propietario: string) {
    this.path = "./src/funkos/users/" + propietario + "/funko-list.json";
    this.propietario = propietario;
  }
  /**
   * Getter del array de funkos
   * @returns Devuelve el array de funkos
   */
  public getFunkos(): funko[] {
    return this.funkos;
  }
  /**
   * Elimina el funko de la lista
   * @param id Identificador del funko
   * @returns La lista de funkos sin el funko eliminado
   */
  public removeFunko(id: number): void | funkoSchema[] {
    const rawdata = fs.readFileSync(this.path);
    const funkoCollection: funkoSchema[] = JSON.parse(rawdata.toString());
    const funko = funkoCollection.find((funko) => funko.id === id);
    if (funko) {
      const funkoCollection2: funkoSchema[] = funkoCollection.filter(
        (funko) => funko.id !== id
      );
      fs.writeFileSync(this.path, JSON.stringify(funkoCollection2));
      console.log(chalk.bgGreen("Funko eliminado correctamente"));
      if (this.propietario === "Test") {
        return funkoCollection2;
      }
    } else {
      console.log(chalk.bgRed("El funko no existe en la lista"));
    }
  }
  /**
   * Añaade un funko a la lista
   * @param funko Funko a añadir
   * @returns La lista de funkos con el funko añadido
   */
  public addFunko(funko: funko): void | funkoSchema[] {
    const rawdata = fs.readFileSync(this.path);
    const funkoCollection: funkoSchema[] = JSON.parse(rawdata.toString());
    if (!funkoCollection.find((funkoit) => funkoit.id === funko.getId())) {
      const funko1: funkoSchema = {
        id: funko.getId(),
        name: funko.getName(),
        description: funko.getDescription(),
        type: funko.getType(),
        genre: funko.getGenre(),
        franchise: funko.getFranchise(),
        number: funko.getNumber(),
        exclusive: funko.getExclusive(),
        specialFeatures: funko.getSpecialFeatures(),
        marketValue: funko.getMarketValue(),
      };
      funkoCollection.push(funko1);
      fs.writeFileSync(this.path, JSON.stringify(funkoCollection));
      console.log(chalk.bgGreen("Funko añadido correctamente"));
      if (this.propietario === "Test") {
        return funkoCollection;
      }
    } else {
      console.log(chalk.bgRed("El funko ya existe en la lista"));
    }
  }
  /**
   * Lista los funkos de la lista
   * @returns La lista de funkos actual
   */
  public listFunkos(): void | funkoSchema[] {
    const rawdata = fs.readFileSync(this.path);
    const funkoCollection: funkoSchema[] = JSON.parse(rawdata.toString());
    funkoCollection.forEach((funko) => {
      console.log("-----------------");
      console.log("ID: " + funko.id);
      console.log("Name: " + funko.name);
      console.log("Description: " + funko.description);
      console.log("Type: " + funko.type);
      console.log("Genre: " + funko.genre);
      console.log("Franchise: " + funko.franchise);
      console.log("Number: " + funko.number);
      if (funko.exclusive) {
        console.log("Exclusive: Yes");
      } else {
        console.log("Exclusive: No");
      }
      console.log("Special Features: " + funko.specialFeatures);

      if (funko.marketValue > 100) {
        console.log("Market Value: " + chalk.green(funko.marketValue));
      } else if (funko.marketValue > 50) {
        console.log("Market Value: " + chalk.blue(funko.marketValue));
      } else if (funko.marketValue > 25) {
        console.log("Market Value: " + chalk.yellow(funko.marketValue));
      } else {
        console.log("Market Value: " + chalk.red(funko.marketValue));
      }
    });
    if (this.propietario == "Test") {
      return funkoCollection;
    }
  }
  /**
   * Lee un funko de la lista por su id
   * @param id Identificador del funko
   * @returns El funko con el id indicado
   */
  public readFunko(id: number): void | funkoSchema {
    const rawdata = fs.readFileSync(this.path);
    const funkoCollection: funkoSchema[] = JSON.parse(rawdata.toString());
    const funko = funkoCollection.find((funko) => funko.id === id);
    if (funko) {
      console.log("-----------------");
      console.log("ID: " + funko.id);
      console.log("Name: " + funko.name);
      console.log("Description: " + funko.description);
      console.log("Type: " + funko.type);
      console.log("Genre: " + funko.genre);
      console.log("Franchise: " + funko.franchise);
      console.log("Number: " + funko.number);
      if (funko.exclusive) {
        console.log("Exclusive: Yes");
      } else {
        console.log("Exclusive: No");
      }
      console.log("Special Features: " + funko.specialFeatures);

      if (funko.marketValue > 100) {
        console.log("Market Value: " + chalk.green(funko.marketValue));
      } else if (funko.marketValue > 50) {
        console.log("Market Value: " + chalk.blue(funko.marketValue));
      } else if (funko.marketValue > 25) {
        console.log("Market Value: " + chalk.yellow(funko.marketValue));
      } else {
        console.log("Market Value: " + chalk.red(funko.marketValue));
      }
      if (this.propietario === "Test") {
        return funko;
      }
    } else {
      console.log(
        chalk.bgRed("El funko con id: " + id + " no existe en la lista")
      );
    }
  }
  /**
   * Actualiza un funko de la lista
   * @param funko Objeto funko a actualizar
   * @returns La lista de funkos actualizada
   */
  public updateFunko(funko: funko): void | funkoSchema[] {
    const rawdata = fs.readFileSync(this.path);
    const funkoCollection: funkoSchema[] = JSON.parse(rawdata.toString());
    const funko1 = funkoCollection.find(
      (funkoup) => funkoup.id === funko.getId()
    );
    if (funko1) {
      funko1.name = funko.getName();
      funko1.description = funko.getDescription();
      funko1.type = funko.getType();
      funko1.genre = funko.getGenre();
      funko1.franchise = funko.getFranchise();
      funko1.number = funko.getNumber();
      funko1.exclusive = funko.getExclusive();
      funko1.specialFeatures = funko.getSpecialFeatures();
      funko1.marketValue = funko.getMarketValue();

      const funkoCollection2 = funkoCollection.filter(
        (funko) => funko.id !== funko1.id
      );
      funkoCollection2.push(funko1);
      fs.writeFileSync(this.path, JSON.stringify(funkoCollection2));
      console.log(chalk.bgGreen("Funko actualizado correctamente"));
      if (this.propietario === "Test") {
        return funkoCollection2;
      }
    } else {
      console.log(
        chalk.bgRed(
          "El funko con id: " + funko.getId() + " no existe en la lista"
        )
      );
    }
  }
}
