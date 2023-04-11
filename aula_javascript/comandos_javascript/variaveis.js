var variavel1 = "Ola" //var é a maneira primitiva e nao recomendada para criar variaveis
console.log(variavel1)

var variavel1 = 123
console.log(variavel1)

let variavel2 = "ola2" //let garante contexto e escopo
console.log(variavel2)
variavel2 = 1234
console.log(variavel2)

// variavel3 = "ola3" //pode ser acessado e modificado em qualquer contexto e escopo dessa execucao
// console.log(variavel3)

//Exemplo de escopo com let
if(true){
    var variavel1 = "teste"
    let variavel2 = "teste2"
}

console.log(variavel1)
console.log(variavel2)


//constante

const x = 5
x = "ola"


