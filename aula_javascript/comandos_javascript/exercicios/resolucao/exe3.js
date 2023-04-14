function mostrarMaior(){
    let numerosTxt = document.getElementById("numeros").value;
    let numeros = numerosTxt.split(" ");

    // maior = numeros[0]    
    // for(let i = 1; i < numeros.length; i++){
    //     if(maior < numeros[i]) maior = numeros[i]
    //     // maior = (maior < numeros[i])? numeros[i] : maior
    // }

    let valoresAgoraNumericos = numeros.map(str =>  Number(str));
    let maiorValor = Math.max(...valoresAgoraNumericos)

    document.write(`O maior numero é:  ${maiorValor} <br>`)

}

