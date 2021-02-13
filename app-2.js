//Comparar si dos reservas son iguales

const booking1 = { count: 3, price: 127.95 };
const booking2 = { count: 5, price: 112.95 };

if(booking1.count == booking2.count && booking1.price==booking2.price){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}
//Mostrar la suma del número de noches de las dos reservas.
var count = booking1.count + booking2.count;
console.log(count);

// Comparar dos reservas para mostrar la de mayor número de noches.

if(booking1.count > booking2.count){
    console.log("La primera reserva es mayor");
}else{
    console.log("La segunda reserva es mayor");
}
// Ampliar una noche más una reserva.

booking1.count = 4;
console.log(booking1.count);

// Calcular la diferencia de precio total entre dos reservas (incluidos descuentos).

var precio1 = booking1.count*booking1.price;
var precio2 = booking2.count*booking2.price;

var discount = 0.2; 
var precioReserva1;
var precioReserva2;

if( precio1 > 500){
    precioReserva1 = precio1 -(precio1*discount);
} else{
    precioReserva1 = precio1;
}
 if(precio2 > 500){
    precioReserva2 = precio2 - (precio2*discount);
}else{
    precioReserva2 = precio2;
}


var diferenciaPrecios = precioReserva1 - precioReserva2;
console.log(diferenciaPrecios);

// Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos).

if( precioReserva1 > precioReserva2){
    console.log("La primera reserva tiene mayor precio");
} else{
    console.log("La segunda tiene mayor precio");
}

// Mostrar número de reservas a las que se podrían aplicar descuento.

let reservasConDescuento = 0;

if(precio1 > 500){
    reservasConDescuento++;
}
if(precio2 > 500){
    reservasConDescuento++;
}
console.log("Hay " + reservasConDescuento + " reservas con descuento.");


// Mostrar "Todas con descuento" si las dos reservas tienen descuentos.

if( precio1 > 500 && precio2 > 500){
    console.log("Todas con descuento");
}

// Mostrar la suma del precio total con descuentos de las dos reservas.

var totalReservas = precioReserva1 + precioReserva2;
console.log(totalReservas);