/* **********     Curso JavaScript: 5. Cadenas de Texto (Strings) - #bryandejesusrt     ********** */

//Cadenas de Texto aka Strings
let nombre = "Bryan";
let apellido = "Rosa";
let saludo = new String("Hola Mundo");
let lorem =
  "       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.      ";

console.log(nombre, apellido, saludo);
console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  lorem.includes("amet"),
  lorem.includes("Bryan"),
  lorem,
  lorem.trim(),
  lorem.split(" "),
  lorem.split(",")
);

/* **********     Curso JavaScript: 6. Template Strings - #bryandejesusrt     ********** */

let nombre = "Bryan";
let apellido = "Rosa";

Concatenación;
let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo);

//Interpolción de variables
//Template String
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);

let ul =
  "<ul>< li > Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul > ";

console.log(ul);

let ul2 = `
      <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
    </ul>
    `;

console.log(ul2);

let ul3 = "<ul>";
ul3 += "<li> Primavera</li>";
ul3 += "<li>Verano</li>";
ul3 += "<li>Otoño</li>";
ul3 += "<li>Invierno</li>";
ul3 += "</ul>";

console.log(ul3);

/* **********     Curso JavaScript: 7. Números (Numbers) - #jonmircha     ********** */

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(a, b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a + b);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));

/* **********     Curso JavaScript: 8. Booleans - #jonmircha     ********** */

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f);
console.log(typeof verdadero, typeof falso);
console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" "));

/* **********     Curso JavaScript: 9. undefined, null & NaN - #jonmircha     ********** */

//undefined indica que no se ha inicializado una variable y que el valor está ausente
let indefinida;
console.log(indefinida);

//null es un valor especial que indica la ausencia de un valor
let nulo = null;
con sole.log(null);

//NaN - Not a Number
let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);





