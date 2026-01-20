// this is temp in kelvin.
const kelvin = 0;
// converting kelvin to celsius.
let celsius = kelvin - 273;
// converting celsius into fahrenheit.
let fahrenheit = celsius *(9/5)+32;
// round down decimal number.
let TEMPERATURE = Math.floor(fahrenheit);
// printing TEMPERATURE using interpolation.
console.log(`The temperature is ${TEMPERATURE} degrees Fahrenheit.`);
// finding newton.
let newton = celsius * (33/100);
let resultNewton = Math.floor(newton);
// printing newton
console.log(`The temperature is ${resultNewton} degrees Newton.`);