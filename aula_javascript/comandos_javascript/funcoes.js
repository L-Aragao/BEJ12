//funcao é conjunto de instrucoes que so sera executado em momento de invocao, quando chamada

// function primeiraFuncao() {
//     console.log("hello world - primeira funcao")
// }
// primeiraFuncao.call()
// primeiraFuncao()

//funcao anonima
const segundaFuncao = function (){}

//funcao seta - arrow function
const terceiraFuncao = () => {}

function soma1(x, y){
    console.log(x+y)
}

const soma2 = function (x, y) {
    console.log(x + y)
}

const soma3 = (x, y) => { 
    console.log(x + y)
}

soma1(10, 5)
soma2(10, 5)
soma3(10, 5)