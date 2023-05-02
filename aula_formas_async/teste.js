// function espera(){
//     setTimeout(()=>{ console.log("terminei de contar")}, 3000)
// }


// console.log(1)
// espera()
// console.log(2)
// espera()
// console.log(3)

console.log(1)
setTimeout(() => {
    console.log(2)
    setTimeout(() => console.log(3), 3000)
}, 3000)