/* **********     Curso JavaScript: 21. Arrow Functions - #bryandejesusrt     ********** */
const saludar = () => console.log(`Hola`);
saludar();

const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Juan");

const sumar = function (a, b) {
  return a + b;
};

const sumar = (a, b) => a + b;

console.log(sumar(9, 9));

const funcionDeVariasLineas = () => {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
};

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((el, index) =>
  console.log(`${el} esta en la posición ${index}`)
);

function Perro() {
  console.log(this);
}

Perro();

const perro = {
  nombre: "jesus",
  ladrar() {
    console.log(this);
  },
};

perro.ladrar();
