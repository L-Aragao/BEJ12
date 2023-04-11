// Number são floats de 64-bit

let num1 = 0.1
let num2 = 0.7

console.log(typeof num1)
console.log(typeof num2)

let num3 = num1 + num2
console.log(num3)
console.log(num3.toFixed(2))
console.log(((num1 * 100) + (num2 * 100))/100)
console.log(((num1 + num2)*100)/100)

console.log( Number.isInteger(num3))// false

// arredondamento
let num4 = 1.47
console.log(Math.floor(num4)) //para baixo do inteiro mais proximo
console.log(Math.ceil(num4)) //para cima do inteiro mais proximo
console.log(Math.round(num4)) //para inteiro mais proximo


// Max e Min
console.log(Math.max(1 , 3, 4, 10, 12, -1000, 999))
console.log(Math.min(1 , 3, 4, 10, 12, -1000, 999))

// Numero aleatorio
let numeroAleatorio = Math.random()*100
console.log(Math.round(numeroAleatorio))


