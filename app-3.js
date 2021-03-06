var horario = [
    { day: "Lunes", subject: "Matemáticas", },
    { day: "Martes", subject: "Lengua", },
    { day: "Miércoles", subject: "Física", },
    { day: "Jueves", subject: "Química", },
    { day: "Viernes", subject: "Gimnasia", },
]

// 1º Escribir en una variable un día de la semana y decir cual asignatura toca ese día.
var dia = "Jueves";
switch (dia) {
    case horario[0].day:
        console.log(horario[0].subject);
        break;
    case horario[1].day:
        console.log(horario[1].subject);
        break;
    case horario[2].day:
        console.log(horario[2].subject);
        break;
    case horario[3].day:
        console.log(horario[3].subject);
        break;
    case horario[4].day:
        console.log(horario[4].subject);
        break;

}


// 2º Según una variable llamada hora , mostrar un buenos días, buenas tardes o buenas noches según la hora. Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a 5. Solo se tienen en cuenta la hora no los minutos.

var hora = 14;

if (hora > 6 && hora <= 12) {
    console.log("Buenos días");
} else if (hora > 12 && hora <= 20) {
    console.log("Buenas tardes");
} else if (hora > 20 && hora <= 5) {
    console.log("Buenas Noches");
}

// 3º Dada una variable que se llame diaSemana , que contenga un número del 1 al 7 mostrar el día de la semana correspondiente.

var diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("No hay más días de la semana");
}

// 4º Calcula la media de tres notas y muestra si está apta, no apta, notable o sobre saliente. - Una persona está apta con un 5. - Una persona no apta de menos de un 5. - Notable de 5 a 7. - Sobre saliente de 7 al 10.

var nota1 = parseInt(prompt("Introduce una nota", 0));
var nota2 = parseInt(prompt("Introduce una segunda nota", 0));
var nota3 = parseInt(prompt("Introduce una tercera nota", 0));

var media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Has suspendido")
} else if (media == 5) {
    console.log("Has aprobado justo. Sigue esforzandote")
} else if (media > 5 && media < 7) {
    console.log("Has obtenido un notable")
} else if (media >= 7 && media <= 10) {
    console.log("Has obtenido un sobresaliente");
}

// 5º Según una variable dia y otra mesNacimiento , calcular el horóscopo de la persona.

var dia = parseInt(prompt("Intoduce tu dia de nacimiento"))
var mesNacimiento = prompt("Introduce tu mes de nacimiento");

switch (mesNacimiento) {
    case "enero": // 01
        if (dia >= 21){
            console.log("acuario");
        }
           
    break;
    case "febrero": // 02
        if (dia <= 19){
            console.log("acuario");
        }
        else{
            console.log("piscis");
        }
    break;
    case "marzo": // 03
        if (dia <= 20){
            console.log("piscis");
        }
        else{
            console.log("aries");
        }
    break;
    case "abril": // 04
        if (dia <= 20){
            console.log("aries");
        }
        else{
            console.log("tauro");
        }
    break;
    case "mayo": // 05
        if (dia <= 21){
            console.log("tauro");
        } 
        else{
            console.log("geminis");
        }
    break;
    case "junio": // 06
        if (dia <= 21){
            console.log("geminis");
        } 
        else{
            console.log("cancer");
        } 
    break;
    case "julio": // 07
        if (dia >= 23){
            console.log("cancer");
        } 
        else{
            console.log("leo");
        }  
    break;
    case "agosto": // 08
        if (dia <= 23){
            console.log("leo");
        }else{
            console.log("virgo");
        }
    break;
    case "septiembre": // 09
        if (dia <= 23){
            console.log("virgo");
        }else
            console.log("libra");
    break;
    case "octubre": // 10
        if (dia <= 23){
            console.log("libra");
        }else{
            console.log("escorpio");
        }
    break;
    case "noviembre": // 11
        if (dia <= 22){
            console.log("escorpio");
        }else{
            console.log("sagitario");
        }
    break;
    case "diciembre": // 12
        if (dia <= 21){
            console.log("sagitario");
        }else{
            console.log("capricornio");
        }
    break;
}


// 6º Según una variable llamada numero , calcule si es par o inpar.

var numero = parseInt(prompt("Introduce un numero"));
var esPar = numero % 2 == 0 ? "El número " + numero + " es par." : "El número " + numero + " es impar."
console.log(esPar);


// 7º Usa una variable y di si es positivo o negativo.
var variable = parseInt(prompt("Introduce un número positivo o negativo"));

var esNegativo = variable < 0 ? "El número " + variable + " es negativo" : "El número " + variable + " es positivo";
console.log(esNegativo)

// 8º Di si un número es mayor de 100.

var num = parseInt(prompt("Introduce un numero"));

if (num > 100) {
    console.log("El numero " + num + " es mayor que 100")
} else if (num < 100) {
    console.log("El numero " + num + " es menor que 100")
} else if (num == 100) {
    console.log("El numero " + num + " es igual que 100")
}


// 9º Usa 3 variables que contengan un número y di si el tercero es igual a la suma del primero y el segundo.

var a = 2;
var b = 3;
var c = 6;

var suma = a + b;

var resultado = suma == c ? "La tercera variable es igual a la suma" : "El tercero no es igual a la suma";
console.log(resultado);


//Calcular área según el tipo de figura geométrica.

var square = {
    sideOne: 1,
    sideTwo: 3,
    typeOfGemotricFigure: 'Cuadrado'
}
var circle = {
    radius: 5,
    typeOfGemotricFigure: 'Círculo'
}

var areaCuadrado = square.sideOne * square.sideTwo;
var areaCirculo = circle.radius * 3.14;

var calculo = circle.typeOfGemotricFigure == "Círculo" ? areaCirculo : "No es un circulo";
console.log(calculo)

var Calcula = square.typeOfGemotricFigure == "Cuadrado" ? areaCuadrado : "No es un cuadrado";
console.log(Calcula)