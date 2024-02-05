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




