//Array

let primeiroArray = [] //criando um objeto do tipo array
let segundoArray = new Array()
let terceiroArray = new Array(3)

console.log(primeiroArray.length)
console.log(segundoArray.length)
console.log(terceiroArray.length)

// terceiroArray = terceiroArray + ["Luiz"] //super ruim quebra quando estamos utilizando constante

// adicionar elementos em um array PUSH

terceiroArray.push(1)
terceiroArray.push(2)

console.log(terceiroArray)

terceiroArray[0] = 'A'
terceiroArray[1] = 'B'
terceiroArray[2] = 'C'

console.log(terceiroArray)

// POP apaga o ultimo elemento
terceiroArray.pop()
console.log(terceiroArray)

// unshift adiciona a esquerda - na primeira posicao
terceiroArray.unshift('Z')
console.log(terceiroArray)

// shift remove a esquerda - na primeira
terceiroArray.shift()
console.log(terceiroArray)

// remove dentro de um intervalo
terceiroArray.splice(0,1)
console.log(terceiroArray)


// let aluno1_nome = "Luiz"
// let aluno2_nome = "Mario"
// let aluno3_nome = "Luigi"

// console.log(aluno1_nome);

const alunos = ["Luiz", "Mario", "Luigi"]
// console.log(typeof alunos)


// console.log(alunos[0])
// console.log(alunos[1])
// console.log(alunos[2])

// let contador = 0
// while(contador < alunos.length){
//     console.log(alunos[contador])
//     contador ++
//     // ++contador
//     // contador += 1
// }

// do{

// }while(contador < alunos.length)


for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i])
    console.log(typeof i)
}

for( i in alunos){
    console.log(alunos[i])
    console.log(typeof i)
}

for (const valor of alunos){
    console.log(valor)
    console.log(typeof valor)
}

alunos.forEach(element => { console.log (element)})

//foreach e for(of)) são equivalentes, foreach traz uma abordagem mais funcional

