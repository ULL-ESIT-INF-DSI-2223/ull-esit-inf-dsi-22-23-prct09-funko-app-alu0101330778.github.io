# [PRÁCTICA 9. Funko App](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101330778.github.io). 

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101330778.github.io/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101330778.github.io?branch=main)

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grupof/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grupof/actions/workflows/coveralls.yml)

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101330778.github.io)
## Jairo Alonso Abreu - alu0101330778.

## Índice <a name="índice"></a>
1. [Introducción](#introducción)
2. [Funcionamiento de la aplicación](#funcionamiento)
3. [Descripcion de clases](#descripcionClases)
- 3.1 [Clase funko](#claseFunko)
- 3.2 [Clase funkoCollection](#claseFunkoCollection)
- 3.3 [Clase usuario](#claseUsuario)
- 3.4 [Clase gestor](#claseGestor)
4. [Conclusiones](#conclusiones)
5. [Referencias](#referencias)

## Introducción <a name="introducción"></a>
> [Volver al índice](#índice)

La aplicación que vamos a desarrollar es una aplicación de gestión de colecciones de Funko Pop. Esta aplicación nos permitirá gestionar una colección de Funko Pop, añadiendo, eliminando y modificando los Funko Pop que tengamos en nuestra colección. Cada usuario tiene una colección propia de Funko Pop y puede añadir, eliminar y modificar los Funko Pop que tenga en su colección.
## Funcionamiento de la aplicación <a name="funcionamiento"></a>
> [Volver al índice](#índice)

La aplicación se ejecutará desde la terminal, para ello, tendremos que ejecutar el comando `node /dist/index.js` y los parámetors que queramos según la acción que queramos realizar. A continuación, se muestra un ejemplo de ejecución de la aplicación.

```bash
$ node dist/index.js list --user usu1
```
Comando para listar los Funko Pop de un usuario.

```bash
$ node dist/index.js add --user usu1 --id 1 --name "Funko Pop 1" ...
```
Comando para añadir un Funko Pop a la colección de un usuario.

Se han utilizado los paquetes de `yargs` para la gestión de los parámetros de entrada y `chalk` para la gestión de los colores de la terminal. De esta manera, la aplicación se ejecuta desde la terminal y se le pasan los parámetros de entrada para realizar las acciones que queramos, una vez ejecutada la acción, se muestra un mensaje por pantalla con el resultado.

## Descripcion de clases <a name="descripcionClases"></a>
> [Volver al índice](#índice)
Para la realización de esta práctica, se han creado las siguientes clases:
- Clase funko: Con las especificaciones de cada funko.
- Clase funkoCollection: Con las especificaciones de la colección de funkos y los métodos para añadir, eliminar y modificar los funkos.
- Clase usuario: Con las especificaciones de cada usuario.
- Clase gestor: Que une las demás clases.

Se han definido también los siguientes tipos:
- Type: Enumerado con el tipo de funko.
```ts
export enum type {
  POP = "Pop!",
  POP_RIDES = "Pop! Rides",
  VYNIL_SODA = "Vynil Soda",
  VYNIL_GOLD = "Vynil Gold",
  OTHER = "Other",
}

```
- Genre: Enumerado con el género del funko.
```ts
export enum genre {
  ANIMATION = "Animation",
  MOVIES_TV = "Movies & TV",
  VIDEOGAMES = "Video Games",
  SPORTS = "Sports",
  MUSIC = "Music",
  ANIME = "Anime",
  OTHER = "Other",
}	
```
- funkoSchema: Esquema de los datos de un funko.
```ts
export type funkoSchema = {
  id: number;
  name: string;
  description: string;
  type: type;
  genre: genre;
  franchise: string;
  number: number;
  exclusive: boolean;
  specialFeatures: string;
  marketValue: number;
};
```


## Clase funko <a name="claseFunko"></a>
> [Volver al índice](#índice)

La clase funko tiene las siguientes propiedades:
- id: Identificador del funko.
- name: Nombre del funko.
- description: Descripción del funko.
- type: Tipo del funko.
- genre: Género del funko.
- franchise: Franquicia del funko.
- number: Número del funko.
- exclusive: Booleano que indica si el funko es exclusivo.
- specialFeatures: Características especiales del funko.
- marketValue: Valor de mercado del funko.

Los métodos de la clase funko son solo getters de cada uno de los atributos de la clase.
Con esta clase, se puede crear un funko con los datos que se le pasen por parámetro y obtener los datos de cada funko.

```ts
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

  
  public getId(): number {
    return this.id;
  }
  
  public getName(): string {
    return this.name;
  }
  
  public getDescription(): string {
    return this.description;
  }
  
  public getType(): type {
    return this.type;
  }
 
  public getGenre(): genre {
    return this.genre;
  }

  public getFranchise(): string {
    return this.franchise;
  }
  
  public getNumber(): number {
    return this.number;
  }
  
  public getExclusive(): boolean {
    return this.exclusive;
  }
  
  public getSpecialFeatures(): string {
    return this.specialFeatures;
  }
 
  public getMarketValue(): number {
    return this.marketValue;
  }
}
```

### Tests
> [Volver al índice](#índice)
Para porbar la clase funko, se han creado los siguientes tests:
```ts
describe('Testeo de la Clase Funko', () => {
    it('Comprobamos el id del funko', () => {
        expect(funkotest.getId()).to.equal(5);
    });
    it('Comprobamos el nombre del funko', () => {
        expect(funkotest.getName()).to.equal("Funko5");
    });
    it('Comprobamos la descripción del funko', () => {
        expect(funkotest.getDescription()).to.equal("Funko5 description");
    });
    it('Comprobamos el tipo del funko', () => {
        expect(funkotest.getType()).to.equal(tipo);
    });
    it('Comprobamos el género del funko', () => {
        expect(funkotest.getGenre()).to.equal(genero);
    });
    it('Comprobamos la franquicia del funko es la correcta', () => {
        expect(funkotest.getFranchise()).to.equal("Funko5 franchise");
    });
    it('Comprobamos el número del funko', () => {
        expect(funkotest.getNumber()).to.equal(5);
    });
    it('Comprobamos el exclusivo del funko', () => {
        expect(funkotest.getExclusive()).to.equal(true);
    });
    it('Comprobamos las características especiales del funko', () => {
        expect(funkotest.getSpecialFeatures()).to.equal("Funko5 special features");
    });
    it('Comprobamos el valor de mercado del funko', () => {
        expect(funkotest.getMarketValue()).to.equal(75);
    });

});
```
Se puede ver por el badge de coverage que los test han pasado al 100%

## Clase funkoCollection <a name="claseFunkoCollection"></a>
> [Volver al índice](#índice)

La clase funkoCollection tiene las siguientes propiedades:
- funkos: Array de funkos.
- path: Ruta del fichero json donde se almacenan los datos de los funkos.
- propietario: Nombre del propietario de la colección.

El constructor de la clase funkoCollection recibe el nombre del propietario de la colección y crea un array de funkos vacío y la ruta del fichero json donde se almacenan los datos de los funkos de los usuarios. Cada usuario tiene una carpeta con su nombre y dentro un fichero json con la lista de funkos que tiene.

La clase  funkoCollection interactúa directamente con el fichero json donde se almacenan los datos de los funkos de los usuarios. Para ello, se han creado los siguientes métodos:
- `getFunkos()`: Devuelve el array de funkos.
- `removeFunko(id: number)`: Elimina el funko con el id que se le pasa por parámetro de la base de datos del usuario, en caso de que el id no se encuentre en la base de datos, devuelve un error.
- `addFunko(funko: funko)`: Añade el funko que se le pasa por parámetro a la base de datos del usuario, en caso de que el id del funko ya se encuentre en la base de datos, devuelve un error.
- `updateFunko(funko: funko)`: Actualiza el funko que se le pasa por parámetro en la base de datos del usuario, en caso de que el id del funko no se encuentre en la base de datos, devuelve un error.
- `listFunkos()`: Devuelve la lista de funkos de la base de datos del usuario.
- `readFunko(id: number)`: Devuelve el funko con el id que se le pasa por parámetro de la base de datos del usuario, en caso de que el id no se encuentre en la base de datos, devuelve un error.

```ts
export class funkoCollection {
  public funkos: funko[] = [];
  protected path: string;
  private propietario: string;
 
  constructor(propietario: string) {
    this.path = "./src/funkos/users/" + propietario + "/funko-list.json";
    this.propietario = propietario;
  }

  public getFunkos(): funko[] {
    return this.funkos;
  }
 
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
```

### Tests
> [Volver al índice](#índice)
Para comprobar los resultados se han instanciados varios objetos de la clase funkoCollection y se han realizado pruuebas a todos los métodos. Se ha creado una base de datos `Test` para no modificar la base de datos original.
```ts
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
```
Los resultados están correctos y se ha comprobado que no se modifica la base de datos original.
## Clase usuario <a name="claseUsuario"></a>
> [Volver al índice](#índice)

La clase usario define un usuario con su nombre y una colección de funkos. Es una clase sencilla que solo tiene un constructor y getters y sirve de punto de conexión entre la clase gestor y la clase funkoCollection.
```ts
export class usuario {
  private name: string;
  private funkoCollection: funkoCollection;
  
  constructor(name: string) {
    this.name = name;
    this.funkoCollection = new funkoCollection(name);
  }
  
  public getName(): string {
    return this.name;
  }
  
  public getFunkoCollection(): funkoCollection {
    return this.funkoCollection;
  }
}
```

### Tests
> [Volver al índice](#índice)

Los tests de la clase usuario son muy sencillos, solo se comprueba que el nombre del usuario es correcto y que la colección de funkos del usuario es correcta.
```ts
const usuariotest = new usuario("Test");
const funkoarray: funko[] = [];

describe('Usuario', () => {
    it('Comprobamos el nombre del usuario', () => {
        const result = usuariotest.getName();
        expect(result).to.equal("Test");
    });
    it('Getter la colección de funkos del usuario', () => {
        const result = usuariotest.getFunkoCollection().getFunkos();
        expect(result).to.be.deep.equal(funkoarray);
    });
});
```
## Clase gestor <a name="claseGestor"></a>
> [Volver al índice](#índice)

La clase gestor es la clase que se encarga de gestionar los comandos introducidos por el usuario. Para ello, se encarga de comprobar que el comando introducido es correcto y de llamar a la función correspondiente de la clase funkoCollection. Además, se encarga de comprobar que el usuario está registrado y de registrar al usuario si no lo está.

Atributos:
- usuarioActual: usuario | undefined -> Almacena el usuario actual.
- lineasComandos: string[] -> Almacena las líneas de comandos introducidas por el usuario.

Métodos:
- comprobarComando(): void -> Comprueba que el comando introducido es correcto y llama a la función correspondiente de la propia clase.
- addFunko(): void -> Analiza que el comando add tiene todos los parámetros necesarios y llama a la función addFunko de la clase funkoCollection.
- listFunkos(): void -> Llama a la función listFunkos de la clase funkoCollection.
- removeFunko(): void -> Analiza que el comando remove tiene todos los parámetros necesarios y llama a la función removeFunko de la clase funkoCollection.
- updateFunko(): void -> Analiza que el comando update tiene todos los parámetros necesarios y llama a la función updateFunko de la clase funkoCollection.
- readFunko(): void -> Analiza que el comando read tiene todos los parámetros necesarios y llama a la función readFunko de la clase funkoCollection.
- comprobarUsuario(): void -> Comprueba si el usuario está registrado y si no lo está, llama a la función crearUsuario.
- crearUsuario(): void -> Crea un nuevo usuario y lo almacena en la base de datos.

```ts
export class gestor {
  private usuarioActual: usuario | undefined;
  private lineasComandos: string[];

  constructor(lineasComandos: string[]) {
    this.lineasComandos = lineasComandos;
  }
  
  public comprobarComando(): void {
    switch (this.lineasComandos[0]) {
      case "add":
        this.addFunko();
        break;
      case "list":
        this.listFunkos();
        break;
      case "remove":
        this.removeFunko();
        break;
      case "update":
        this.updateFunko();
        break;
      case "read":
        this.readFunko();
        break;
      default:
        console.log(chalk.bgRed("Comando no válido"));
        break;
    }
  }
  
  public updateFunko(): void {
    yargs(this.lineasComandos)
      .command(
        "update",
        "Update a funko from the user",
        {
          user: {
            description: "Usuario name",
            type: "string",
            demandOption: true,
          },
          id: {
            description: "Funko ID",
            type: "number",
            demandOption: true,
          },
          name: {
            description: "Funko name",
            type: "string",
            demandOption: true,
          },
          desc: {
            description: "Funko description",
            type: "string",
            demandOption: true,
          },
          type: {
            description: "Funko type",
            type: "string",
            demandOption: true,
          },
          genre: {
            description: "Funko genre",
            type: "string",
            demandOption: true,
          },
          franc: {
            description: "Funko franchise",
            type: "string",
            demandOption: true,
          },
          number: {
            description: "Funko number",
            type: "number",
            demandOption: true,
          },
          exclusive: {
            description: "Funko exclusive",
            type: "boolean",
            demandOption: true,
          },
          specialFeatures: {
            description: "Funko special features",
            type: "string",
            demandOption: true,
          },
          marketValue: {
            description: "Funko market value",
            type: "number",
            demandOption: true,
          },
        },
        (argv) => {
          if (this.comprobarUsuario(argv.user)) {
            const tipo = argv.type as type;
            const genero = argv.genre as genre;
            this.usuarioActual
              ?.getFunkoCollection()
              .updateFunko(
                new funko(
                  argv.id,
                  argv.name,
                  argv.desc,
                  tipo,
                  genero,
                  argv.franc,
                  argv.number,
                  argv.exclusive,
                  argv.specialFeatures,
                  argv.marketValue
                )
              );
          }
        }
      )
      .help().argv;
  }
  
  public readFunko(): void {
    yargs(this.lineasComandos)
      .command(
        "read",
        "Read a funko from the user",
        {
          user: {
            description: "Usuario name",
            type: "string",
            demandOption: true,
          },
          id: {
            description: "Funko ID",
            type: "number",
            demandOption: true,
          },
        },
        (argv) => {
          if (this.comprobarUsuario(argv.user)) {
            this.usuarioActual?.getFunkoCollection().readFunko(argv.id);
          }
        }
      )
      .help().argv;
  }
  
  public removeFunko(): void {
    yargs(this.lineasComandos)
      .command(
        "remove",
        "Remove a funko from the user",
        {
          user: {
            description: "Usuario name",
            type: "string",
            demandOption: true,
          },
          id: {
            description: "Funko ID",
            type: "number",
            demandOption: true,
          },
        },
        (argv) => {
          if (this.comprobarUsuario(argv.user)) {
            this.usuarioActual?.getFunkoCollection().removeFunko(argv.id);
          }
        }
      )
      .help().argv;
  }
  
  public addFunko(): void {
    yargs(this.lineasComandos)
      .command(
        "add",
        "Add a funko to the user",
        {
          user: {
            description: "Usuario name",
            type: "string",
            demandOption: true,
          },
          id: {
            description: "Funko ID",
            type: "number",
            demandOption: true,
          },
          name: {
            description: "Funko name",
            type: "string",
            demandOption: true,
          },
          desc: {
            description: "Funko description",
            type: "string",
            demandOption: true,
          },
          type: {
            description: "Funko type",
            type: "string",
            demandOption: true,
          },
          genre: {
            description: "Funko genre",
            type: "string",
            demandOption: true,
          },
          franc: {
            description: "Funko franchise",
            type: "string",
            demandOption: true,
          },
          number: {
            description: "Funko number",
            type: "number",
            demandOption: true,
          },
          exclusive: {
            description: "Funko exclusive",
            type: "boolean",
            demandOption: true,
          },
          specialFeatures: {
            description: "Funko special features",
            type: "string",
            demandOption: true,
          },
          marketValue: {
            description: "Funko market value",
            type: "number",
            demandOption: true,
          },
        },
        (argv) => {
          if (this.comprobarUsuario(argv.user)) {
            const tipo = argv.type as type;
            const genero = argv.genre as genre;
            this.usuarioActual
              ?.getFunkoCollection()
              .addFunko(
                new funko(
                  argv.id,
                  argv.name,
                  argv.desc,
                  tipo,
                  genero,
                  argv.franc,
                  argv.number,
                  argv.exclusive,
                  argv.specialFeatures,
                  argv.marketValue
                )
              );
          }
        }
      )
      .help().argv;
  }
  
  public listFunkos(): void {

    yargs(this.lineasComandos)
      .command(
        "list",
        "List all the funkos",
        {
          user: {
            description: "Usuario name",
            type: "string",
            demandOption: true,
          },
        },
        (argv) => {
          if (this.comprobarUsuario(argv.user)) {
            console.log(
              chalk.bgGreen("Lista de funkos del usuario: " + argv.user)
            );
            this.usuarioActual?.getFunkoCollection().listFunkos();
          }
        }
      )
      .help().argv;
  }
  
  public comprobarUsuario(nombreUsuario: string): boolean {
    if (
      fs.existsSync("./src/funkos/users/" + nombreUsuario + "/funko-list.json")
    ) {
      if (nombreUsuario == "Test") {
        console.log(chalk.bgRed("El usuario Test no puede ser modificado"));
        return false;
      }
      console.log(chalk.bgGreen("Usuario correcto: " + nombreUsuario));
      this.usuarioActual = new usuario(nombreUsuario);
      return true;
    } else {
      console.log(
        chalk.bgRed(
          "El usuario no está registrado, desea registrarse con el nombre: " +
            nombreUsuario +
            "? (S/N)"
        )
      );
      const stdin = process.openStdin();

      stdin.addListener("data", (data) => {
        if (data.toString().trim() == "S") {
          this.crearUsuario(nombreUsuario);
          console.log(chalk.bgGreen("Usuario creado"));
        } else {
          console.log(chalk.bgRed("Usuario no creado"));
        }
        process.exit();
      });
      return false;
    }
  }
  
  public crearUsuario(nombreUsuario: string): void {
    fs.mkdirSync("./src/funkos/users/" + nombreUsuario);
    fs.writeFileSync(
      "./src/funkos/users/" + nombreUsuario + "/funko-list.json",
      "[]"
    );
  }
}
```


## Conclusiones <a name="conclusiones"></a>
> [Volver al índice](#índice)
Esta práctica ha sido muy interesante ya que hemos podido aprender a utilizar la librería `yargs` para la creación de comandos y sus parámetros. La libería `chalk` nos ha permitido darle un toque de color a la salida por consola. También hemos podido aprender a utilizar la librería `fs` para la lectura y escritura de ficheros de manera síncrona.

## Referencias <a name="referencias"></a>
> [Volver al índice](#índice)

* [Yargs](https://www.npmjs.com/package/yargs)
* [Chalk](https://www.npmjs.com/package/chalk)
* [FS](https://nodejs.org/api/fs.html)
* [Enunciado de la práctica](https://ull-esit-inf-dsi-2223.github.io/prct09-filesystem-funko-app/)
* [Repositorio de la práctica](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101330778.github.io)

