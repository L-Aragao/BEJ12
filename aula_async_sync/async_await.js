/**
 * Async Await é uma maneira mais elegante de se utilizar de promise
 * continua com o objetivo de serializar a execuçao
 * tratamos funcoes de contexto asincronomo como se fosse sincrono
*/

//Encapsulamos o setTimeout dentro de uma promise
function CalculaApostimeOut(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x*2), 2 * 1000)
    })
}

async function calculoDobro(numero) {
    let resultado = await CalculaApostimeOut(numero)
    return resultado
}

let resultado = calculoDobro(10)
console.log(resultado) // promisse

resultado.then( // conseguimos utiliza o then em uma promise retornar pelo async
    result => console.log(result)
)


