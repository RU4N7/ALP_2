let a = Number(prompt("digite o 1°:    "));
let b = Number(prompt("digite o 2°:    "));
let c = Number(prompt("digite o 3°:    "));
if (a + b > c && a + c > b && b + c > a){
    document.write(`e um triangulo`)
}else{
    document.write(`não um triangulo`)
}