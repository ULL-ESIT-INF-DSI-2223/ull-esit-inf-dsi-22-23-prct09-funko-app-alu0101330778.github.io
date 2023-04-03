import { hideBin } from "yargs/helpers";
import { gestor } from "./funkos/gestor.js";

const lineaComandos = hideBin(process.argv);
/*const listfunkos: string[] = ['list', '--user', 'usu1'];
const addfunko: string[] = ['add', '--user', 'usu1', '--id', '20', '--name', 'Funko20', '--desc', 'The best Sonic Funko ever', '--type', 'Pop!', '--genre', 'Games', '--franc', 'Sonic', '--number', '1', '--exclusive', 'false', '--specialFeatures', 'None', '--marketValue', '10'];
const removefunko: string[] = ['remove', '--user', 'usu1', '--id', '20'];
const readfunko: string[] = ['read', '--user', 'usu1', '--id', '20'];
const updatefunko: string[] = ['update', '--user', 'usu1', '--id', '20', '--name', 'Funko20', '--desc', 'The best Sonic Funko ever', '--type', 'Pop!', '--genre', 'Games', '--franc', 'Sonic', '--number', '1', '--exclusive', 'false', '--specialFeatures', 'None', '--marketValue', '100'];
*/
const gestion = new gestor(lineaComandos);

gestion.comprobarComando();
