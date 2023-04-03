import { usuario } from "./types/usuario.js";
import { type } from "./types/type.js";
import { genre } from "./types/genre.js";
import chalk from "chalk";
import yargs from "yargs";
import fs from "fs";
import { funko } from "./types/funko.js";

/**
 * Gestor: Clase que gestiona los comandos introducidos por el usuario
 * @param usuarioActual Usuario actual
 * @param lineasComandos Líneas de comandos introducidas por el usuario
 */
export class gestor {
  private usuarioActual: usuario | undefined;
  private lineasComandos: string[];

  /**
   * Constructor de la clase gestor
   * @param lineasComandos Líneas de comandos introducidas por el usuario
   */
  constructor(lineasComandos: string[]) {
    this.lineasComandos = lineasComandos;
  }
  /**
   * Funcion para comprobar el comando introducido por el usuario
   */
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
  /**
   * Funcion para actualizar un funko de la lista
   * Comprueba que el usuario existe y que el funko existe
   * Si existe el funko, actualiza sus datos
   */
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
  /**
   * Funcion para listar un funko en concreto de un usuario
   * Comprueba que el usuario existe y que el funko existe
   * Si existe el funko, lo muestra por pantalla
   */
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
  /**
   * Funcion para borra un funko de la lista
   * Comprueba que el usuario existe y que el funko existe
   * Si existe el funko, lo borra
   */
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
  /**
   * Funcion para añadir un funko a la lista
   * Comprueba que el usuario existe y que el funko no existe
   * Si no existe el funko, lo añade
   */
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
  /**
   * Funcion para listar todos los funkos de un usuario
   * Comprueba que el usuario existe
   * Si existe el usuario, muestra por pantalla todos los funkos
   */
  public listFunkos(): void {
    //Comprobar el usuario actual

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
  /**
   * Comprueba que el usuario existe
   * @param nombreUsuario Usuario a comprobar
   * @returns True si el usuario existe, false si no existe
   */
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
  /**
   * Crear un usuario en caso de que se necesite
   * @param nombreUsuario Nombre del usuario a crear
   * @returns Muestra por pantalla si el usuario se ha creado o no
   */
  public crearUsuario(nombreUsuario: string): void {
    fs.mkdirSync("./src/funkos/users/" + nombreUsuario);
    fs.writeFileSync(
      "./src/funkos/users/" + nombreUsuario + "/funko-list.json",
      "[]"
    );
  }
}
