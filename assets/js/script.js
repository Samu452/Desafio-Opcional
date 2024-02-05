/* valores ingresados por el usuario */
let num1 = +prompt("Ingresa el primer numero mayor que 0");
let num2 = +prompt("Ingresa el segundo numero mayor que 0");

/* se aplican las diferentes operaciones matematicas  */
let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoMulti = num1 * num2;
let resultadoDiv = num1 / num2;
let resultadoMod = num1 % num2;

/* este es el resultado de las operaciones matematicas */
document.write("El resultado de la suma es: " + resultadoSuma + "<br>");
document.write("El resultado de la resta es: " + resultadoResta + "<br>");
document.write("El resultado de la multiplicacion es: " + resultadoMulti + "<br>");
document.write("El resultado de la division es: " + resultadoDiv + "<br>");
document.write("El resultado del modulo es: " + resultadoMod + "<br>");



/* Temperaturas en diferentes formatos */

let celsius = +prompt("ingresa la temnperatura en grados celsius");
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9) / 5 + 32;

document.write ("los grados en kelvin son: " + kelvin + "<br>");
document.write ("los grados en fahrenheit son: " + fahrenheit + "<br>");

/* calculo de semanas,dias y años */
let dias = +prompt("Ingresa el numero de dias");

let Anios = Math.floor(dias / 365);
let Seman = Math.floor((dias % 365) / 7);
let Di = Math.floor((dias % 365) % 7);

document.write("Los años son: " + Anios + "<br>");
document.write("Las semanas son: " + Seman + "<br>");
document.write("Los dias son: " + Di + "<br>");


/* 5 numeros al azar con sus sumas y promedio */
let numero1 = +prompt("ingresa el primer numero");
let numero2 = +prompt("ingresa el segundo numero");
let numero3 = +prompt("ingresa el tercer numero");
let numero4 = +prompt("ingresa el cuarto numero");
let numero5 = +prompt("ingresa el quinto numero");

let suma = numero1 + numero2 + numero3 + numero4 + numero5;
let promedio = suma / 5;
document.write("la suma de los numeros es: " + suma + "<br>");
document.write("el promedio de los numeros es: " + promedio + "<br>");