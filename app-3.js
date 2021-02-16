var entreSemana =
    [{day: "Lunes", subject: "Matemáticas",},
    {day: "Martes", subject: "Lengua",},
    {day: "Miércoles", subject: "Física",},
    {day: "Jueves", subject: "Química",},
    {day: "Viernes", subject: "Gimnasia",},
    ]
        
// 1º Escribir en una variable un día de la semana y decir cual asignatura toca ese día.


// 2º Según una variable llamada hora , mostrar un buenos días, buenas tardes o buenas noches según la hora. Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a 5. Solo se tienen en cuenta la hora no los minutos.

var hora = 14; //6 a 12, de 13 a 20 y de 21 a 5

if( hora > 6 && hora <= 12){
    console.log("Buenos días");
} else if(hora > 12 && hora <= 20){
    console.log("Buenas tardes");
} else if( hora >20 && hora <= 5){
    console.log("Buenas Noches");
}

// 3º Dada una variable que se llame diaSemana , que contenga un número del 1 al 7 mostrar el día de la semana correspondiente.
 
var diaSemana =3;

switch(diaSemana){
    case 1:
       console.log( "Lunes");
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

var nota1= parseInt(prompt("Introduce una nota",0));
var nota2= parseInt(prompt("Introduce una segunda nota",0));
var nota3= parseInt(prompt("Introduce una tercera nota",0));

var media =(nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log("Has suspendido")
}else if(media == 5){
    console.log("Has aprobado justo. Sigue esforzandote")
}else if(media > 5 && media < 7){
    console.log("Has obtenido un notable")
}else if(media >= 7 && media <= 10){
    console.log("Has obtenido un sobresaliente");
}

// 5º Según una variable dia y otra mesNacimiento , calcular el horóscopo de la persona.

var dia;
var mesNacimiento;


// 6º Según una variable llamada numero , calcule si es par o inpar.

var numero = parseInt(prompt("Introduce un numero"));
if(numero % 2 == 0){
    console.log( "El número "+ numero+ " es par.")
}else{
    console.log( "El número "+ numero+ " es impar.")
}

// 7º Usa una variable y di si es positivo o negativo.
var variable = parseInt(prompt("Introduce un número positivo o negativo"));

if(variable<0){
    console.log("El número "+ variable+ " es negativo")
}else{
    console.log("El número "+ variable+ " es positivo")
}
// 8º Di si un número es mayor de 100.

 var num = parseInt(prompt("Introduce un numero"));
 
 if(num >= 100){
    console.log("El numero "+num+ " es mayor que 100")
 }else{
    console.log("El numero "+num+ " es menor que 100")
 }

 
// 9º Usa 3 variables que contengan un número y di si el tercero es igual a la suma del primero y el segundo.

var a=2;
var b=3;
var c=6;

var suma = a + b;

var resultado= suma == c ? "La tercera variable es igual a la suma": "El tercero no es igual a la suma";
console.log(resultado);