function calcularQuadrado(){
    let numerosTxt = document.getElementById("numeros").value;
    let numeros = numerosTxt.split(" ");


    // for( numero of numeros){
    //     let numeroQuadrado = parseInt(numero)**2
    //     document.write(`O quadrado de ${numero} é:  ${numeroQuadrado}<br>`)
    // }

    numeros.forEach(element => {
        let numeroQuadrado = parseInt(element)**2
        document.write(`O quadrado de ${element} é:  ${numeroQuadrado}<br>`)
    });




}

