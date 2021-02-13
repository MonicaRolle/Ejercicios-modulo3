const booking =  {count :6, price: 127.95,};

let total= booking.count *booking.price;

console.log(total);

var discount= total *0.2;

// if(total > 500){
//     total = total - discount;
// };
// console.log(total);

const Total = total>500? total - discount:total;
console.log("Total sin descuento: " +Total + " €");

if(total > 500 && discount >0){
    console.log("Descuento de: " +discount + " €");
    console.log("Total con descuento incluido: "+ Total+" €");
}