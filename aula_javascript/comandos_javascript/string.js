
let palavra1 = 'Palavra';
let palavra2 = "Palavra";
let palavra3 = `Palavra`;
let palavra4 = "TESTE"

console.log(typeof palavra1);
console.log(typeof palavra2);
console.log(typeof palavra3);

console.log( "O mundo não é um 'mundo'");
console.log( "O mundo não é um \"mundo\"");
console.log( `O 'mundo' não é um "mundo"`);
console.log( `O ${palavra4} não é um '${palavra4}'`)

console.log(palavra1[0])


//comandos para tratamento de string
minhaString = 'EX Palavra teste';
console.log(minhaString[0])
console.log(minhaString.charAt(0)); // Retorna a string
console.log(minhaString.charCodeAt(4)); // Retorna o código inteiro que repsetanta o valor na tabela asc

console.log("Ola" + " " + "Mundo") // "Ola Mundo"
console.log("Ola " + 1 + " Mundo") // "Ola 1 Mundo"

console.log(minhaString.concat(' ', 'é', ' ', 'absoluta')); // raramente usado

console.log(minhaString.indexOf('a',5)); // Retorna o índice != index

console.log(minhaString.lastIndexOf('a', minhaString.length)); // Retorna o índice

console.log(minhaString.match(/[A-Za-z]+/g)); // Retorna um array com os valores encontrados (se g)

console.log(minhaString.match("al")); // Retorna um array com os valores encontrados (se g)

console.log(minhaString.search(/[a-z]+/g)); // Retorna o índice da primeira ocorrência

console.log(minhaString.replace(/a/g, '4')); // Substitui valores na string 

console.log(minhaString.slice(2, 7)); // recorta e extrai um pedaço da string

console.log(minhaString.slice(-10, -7)); // recorta e extrao um pedaço da string pela sentido contrario do index

console.log(minhaString.split(' ', 2)); // divide a string, reflete o tamanho do array

console.log(minhaString.toUpperCase()); // tudo para maiusculo

console.log(minhaString.toLowerCase()); // tudo para minusculo

