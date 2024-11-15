  /* **********     Curso JavaScript: 22. Prototipos - #bryandejesusrt y Curso JavaScript: 23. Herencia - #bryandejesusrt     ********** */
    // POO
    /*
    Clases - Modelo a seguir.
    Objetos - Es una instancia de una clase
      Atributos - es una característica o propiedad del objeto (son variables dentro de un objeto)
      Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
     */


      const animal = {
        nombre: "Snoopy",
        sonar() {
          console.log("Hago sonidos por que estoy vivo");
        }
      }
  
      const animal2 = {
        nombre: "Lola Bunny",
        sonar() {
          console.log("Hago sonidos por que estoy vivo");
        }
      }
  
      console.log(animal);
      console.log(animal2); 
  
  
      //Función constructora
           function Animal(nombre, genero) {
            //Atributos
            this.nombre = nombre;
            this.genero = genero;
  
            //Métodos
            this.sonar = function () {
              console.log("Hago sonidos por que estoy vivo");
            }
  
            this.saludar = function () {
              console.log(`Hola me llamo ${this.nombre}`);
            }
          } 
  
      //Función constructora donde asignamos los métodos al Prototipo, no a la función como tal
      function Animal(nombre, genero) {
         //Atributos
         this.nombre = nombre;
         this.genero = genero;
       } 
  
      //Métodos agregados al prototipo de la función constructora
       Animal.prototype.sonar = function () {
        console.log("Hago sonidos por que estoy vivo");
      }
  
      Animal.prototype.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
      } 
  
      //Herencia Prototípica
       function Perro(nombre, genero, tamanio) {
        this.super = Animal;
        this.super(nombre, genero);
        this.tamanio = tamanio;
      } 
  
      //Perro está heredando de Animal
        Perro.prototype = new Animal();
       Perro.prototype.constructor = Perro; */
  
      //Sobreescritura de métodos del Prototipo padre en el hijo
       Perro.prototype.sonar = function () {
        console.log("Soy un perro y mi sonido es un ladrido");
      }
  
      Perro.prototype.ladrar = function () {
        console.log("Guauuu Guauuu !!!!");
      } 
  
      const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
        lolaBunny = new Animal("Lola Bunny", "Hembra");
  
      console.log(snoopy);
      console.log(lolaBunny);
  
      snoopy.sonar();
      snoopy.saludar();
      snoopy.ladrar();
  
      lolaBunny.sonar();
      lolaBunny.saludar(); 
  
  
    
    
    
      /* **********     Curso JavaScript: 24. Clases - #bryandejesusrt y Curso JavaScript: 25. Métodos estáticos, getters y setters - #bryandejesusrt     ********** */
       class Animal {
        //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
        constructor(nombre, genero) {
          this.nombre = nombre;
          this.genero = genero;
        }
  
        //Métodos
        sonar() {
          console.log("Hago sonidos por que estoy vivo hola como estan");
        }
  
        saludar() {
          console.log(`Hola me llamo ${this.nombre}`);
        }
      }
  
      class Perro extends Animal {
        constructor(nombre, genero, tamanio) {
          //con el método super() se manda a llamar el constructor de la clase padre
          super(nombre, genero);
          this.tamanio = tamanio;
          this.raza = null;
        }
  
        sonar() {
          console.log("Soy un perro y mi sonido es un ladrido");
        }
  
        ladrar() {
          console.log("Guauuu Guauuu!!!");
        }
  
        //un método estático se pueden ejecutar sin necesidad de instanciar la clase
          queEres() {
          console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
        }
  
        //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
        get getRaza() {
          return this.raza;
        }
  
        set setRaza(raza) {
          this.raza = raza;
        }
      }
  
      Perro.queEres();
  
      const mimi = new Animal("Mimi", "Hembra"),
        scooby = new Perro("Scooby", "Macho", "Gigante");
  
      console.log(mimi);
      mimi.saludar();
      mimi.sonar();
      console.log(scooby);
      scooby.saludar();
      scooby.sonar();
      scooby.ladrar();
      console.log(scooby.getRaza);
      scooby.setRaza = "Grán Danés";
      console.log(scooby.getRaza); 
  