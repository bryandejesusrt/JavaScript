/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #bryandejesusrt     ********** */
import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI, usuario);
// console.log(aritmetica.sumar(3, 4));
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
saludar();

let saludo = new Saludar();
saludo;

const semanal = ['Lunes','Maetes','Mierc','Jueves','Viernes','Sabado','Domingo',]