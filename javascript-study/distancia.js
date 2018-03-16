const p1 = {
	x: 4,
	y: 8,
	moverX(x){
		this.x += x
	},
	moverY(y){
		this.y += y
	}
}

const p2 = {
	x: 2,
	y: 5,
	moverX: function(x) {this.x += x},
	moverY: function(y) {this.y += y}
}

function distancia(p1, p2){

	var x = p1.x - p2.x;
	var y = p1.y - p2.y;
	var result_distancia =  Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );	

	return Math.round(result_distancia);

}

////////////// OPTIMIZACIÓN DE CÓDIGO UTILIZANDO PROTOTIPOS //////////////

function Punto(x, y){
	this.x = x,
	this.y = y

	// return this no es necesario
}

// al prototipo punto le adicionamos dos nuevas funciones
Punto.prototype.moverEnX = function moverEnX(x){
	this.x += x;
}
Punto.prototype.moverEnY = function moverEnY(y){
	this.y += y;
}

Punto.prototype.distancia = function distancia(p){
	const x = this.x - p.x;
	const y = this.y - p.y;

	var result_distancia =  Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );	

	return Math.round(result_distancia);

}

const p1 = new Punto(0, 4);
const p2 = new Punto(3, 0);


console.log(p1.distancia(p2));
//////////////////////////////////////////////////////////////////////////////////




//////////// OPTIMIZACIÓN DE CÓDIGO UTILIZANDO Object create ////////////


 const Punto = {
 	//constructor
 	init: function init(x, y){
 		this.x = x,
 		this.y = y
 	},
 	moverEnX: function moverEnX(x){
 		this.x += x;
 	},
 	moverEnY: function moverEnY(y){
 		this.y += y;
 	},
 	distancia: function distancia(p){
 		const x = this.x - p.x;
		const y = this.y - p.y;

		var result_distancia =  Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );	
		return Math.round(result_distancia);
 	}
 }

 // creamos un objeto de tipo Punto
 const p1 = Object.create(Punto);
 const p2 = Object.create(Punto);

 p1.init(0, 4);
 p2.init(3, 0);

//////////////////////////////////////////////////////////////////////////////////




//////////// OPTIMIZACIÓN DE CÓDIGO UTILIZANDO Clases ////////////

class Punto {	
	constructor(x, y){
		this.x = x,
		this.y = y
	}	// return this no es necesario

	moverEnX(x){
		this.x += x;
	}

	moverEnY(y){
		this.y += y;
	}

	distancia(p){
		const x = this.x - p.x;
		const y = this.y - p.y;

		var result_distancia =  Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );	

		return Math.round(result_distancia);

	}
}

const p1 = new Punto(0, 4);
const p2 = new Punto(3, 0);


/// FUNCIONES CON ARRAYS

// ...numeros se utiliza para pasar un numero indefinido de parametros
function suma(...numeros) {
  numeros.reduce(function (acum, numero) {
    acum += numero
    return acum
  }, 0)
}

// row function
const dobles = (...numeros) => numeros.map(numero => numero * 2) // funciton map similar a ruby

//const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)
//
function pares(...numeros){
	return numeros.filter(numero => numero % 2 == 0);
}




//////////////////////// CLOUSERES //////////////////////////////
///
function saludarFamilia(apellido) {
  return function saludarMiembroDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Mónica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")

saludarRomero("Jorge")	



/////////////////////


function prefijoCadena(cadena){
	function prefix(pre){
	return console.log(pre + cadena)
	}
}
const prefijo = prefijoCadena("rico");
prefijo("re");


// using row function
prefijoCadena = (cadena) => valor  => cadena + valor;

const re = prefijoCadena("re");
const inc = prefijoCadena("in");

inc("creible");
re("malo");


function saludar(nombre){
	console.log("hola " + nombre);
}

saludar = (nombre) => console.log("hola" + nombre);

saludar("javier");


// scope de this
// 
class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre;
    this.amigos = amigos;
  }

  listarAmigos() {
    const _self = this;

    this.amigos.forEach((amigo) => {
       //console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
      console.log("hola mi nombre es " + _self.nombre + "y soy amigo de " + amigo);
      //console.log(`Hola, mi nombre es ${_self.nombre} y soy amigo de ${amigo}`)
    }/* .bind(this) */)
  }
}

const sacha = new Persona("Sacha", [ "Pedro", "Juan", "Pepe" ])


///////////////////// BIND /////////////////////////////////////
///
///
class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre;
    this.amigos = amigos;
  }

  listarAmigos() {
    const _self = this;

    this.amigos.forEach(function(amigo){
    	console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    }.bind(this));
  }
}



////// call y apply //////////////////////////
///
///


const javier = {
	nombre: "javier",
	apellido: "pedroza"
}

function saludar(veces){

	for (var i = 0; i < veces; i++) {
		console.log("hola "+ this.nombre +" " + this.apellido);
	}
}
// con bind nos envia una copia de la función
saludar.bind(javier, 3);

// el parametro javier viene siendo el valor que le damos para this dentro del contexto de la función saludar
saludar.call(javier, 3);

saludar.apply(javier, [3]);


console.log("hola");

setTimeout(function(){
	console.log("medio");
}, 0);

console.log("chao");


/////////////////////////////////////////////////////////
///

setTimeout(function(){
	alert("prueba");
}, 1000);

var counter = 200;

const timeout = setInterval(() => { 
	counter--; 
	console.log(counter) }, 1000);

clearTimeout(timeout);


////////////// PROMESAS ////////////////////////
///

	let texto = document.getElementById('texto')

	function consulta(){
		let responsoHtml = prompt('¿Te gusta Html: Si - No').toLowerCase();
		return new Promise( (resolve, reject) => {
			if(responsoHtml === 'si'){
				resolve('Te gusta Html')
			} else {
				reject('No te gusta Html')
			}
		})
	}

	function resultado(message){
		texto.textContent = message
		console.log(message)
	}

	function error(message){
		texto.textContent = message
		console.log(message)
	}

	consulta()
		.then(resultado)
		.catch(error)

/////////////////////////////////////////////////////////
///
///
/////////////////////////RECURSIVIDAD DE FUNCIONES ////////////////////////////////

let contadorMemo = 1

// utilizando el concepto de memoización 
function fibonacciMemo(num, memoria = {}) {
  contadorMemo++
  if (memoria[num]) return memoria[num]
  if (num == 1) return 0
  if (num == 2) return 1

  return memoria[num] = fibonacciMemo(num - 1, memoria) +
            fibonacciMemo(num - 2, memoria)
}


// en una función recursiva el número de peticiones es mayor comparado cuando se utiliza memoisación
let contadorRec = 1
function fibonacciRecursivo(num) {
  contadorRec++
  if (num == 1) return 0
  if (num == 2) return 1

  return fibonacciRecursivo(num - 1) +
      fibonacciRecursivo(num - 2)
}


/////////////////// ITERADORES ///////////////////////////
///

function fibonacci(){
	let a = 0;
	let b= 1;

	return {
		next: function(){
			let f= a;
			a = b;
			b = f + a; 
			return {value: f, done: false}
		}
	}
}

const fibo = fibonacci();
fibo.next();

// utilizando la propiedad de un objecto javascript Symbol.iterator
const fibo = {}
fibo[Symbol.iterator] = fibonacci 

let i=0
for (let value of fibo) {
	console.log(value)
	i++
	if(i>20) break
}


////////// GENERADORES //////////////////////
///
function* generator(i) {

  yield i;
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20


/////////////////////////////////

function* fibonacci(){
	let a=0, b=1
	//yield a - hace que la siguiente vez que se ejecute 
	// la función continue en la siguiente linea.
	
	while (true) {
		let f= a
		a = b
		b = f + b
		let reset = yield f
		if(reset) a=0, b=1
	}
}

const fibo = fibonacci()
// Comandos para la ejecución en la consola
fibo 
fibo.next()
fibo.next(reset)






///////////// INMUTABILIDAD ///////////////////
///

// la inmutabilidad permite crear objectos que no los podamos modificar, sino que creamos un clone del objecto para no afectar el objeto original
//immutable-js
class Persona {
  constructor( nombre, edad ){
    this.nombre = nombre
    this.edad = edad
  }
}
Persona.prototype.clone = function(){
  // Persona pudiera ser Object pero no es recomendable modificar el prototype de los tipos de objeto intrínsecos de JS
  return Object.assign({},this)
}

const julio = new Persona('Julio',41)
const julian = julio.clone()

const cumpleanos = function( persona ){
  return persona.edad ++
}

console.log ( julio)
console.log ( cumpleanos(julian) )
console.log ( julio, julian )