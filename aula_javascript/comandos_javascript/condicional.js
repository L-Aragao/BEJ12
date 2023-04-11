

// operadores logicos
// AND 
// OR
// NOT
// NOR
// XOR
// XAND

//AND -> &&
console.log((true && true))// true
console.log((false && true)) //false
console.log((false && false)) //false


//OR -> ||
console.log((true || true))// true
console.log((false || true)) //true
console.log((false || false)) //false

//NOT ->!
console.log(!true)// false
console.log(!!true)// true



let variavel1 = true
let variavel2 = false

if(variavel1 && variavel2){
    console.log("A logica eh verdadeira")
}else{
    console.log("A logica eh falsa")
}

if(variavel1 || variavel2){
    console.log("A logica eh verdadeira")
}else{
    console.log("A logica eh falsa")
}

let palavra1 = "texto"
let palavra2 = "text"
let palavra3 = "texto"

if(palavra1 === palavra2){
    console.log("as palavras sao iguais")
}else{
    console.log("as palavras sao diferentes")
}

if(palavra1 === palavra3){
    console.log("as palavras sao iguais")
}else{
    console.log("as palavras sao diferentes")
}

/**
 * entre 0 - 12 -> bom dia
 * entre 12 - 18 -> boa tarde
 * entre 18 - 24 -> boa noite
 */

const hora = 30

if(hora >= 0 && hora < 12){
    console.log("bom dia!")
}
else if (hora >= 12 && hora < 18){
    console.log("boa tarde!")
}
else if (hora >= 18 && hora < 24){
    console.log("boa noite!")
}else{
    console.log("hora invalida")
}

