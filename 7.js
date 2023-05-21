
let peso = parseFloat(prompt("Digite o peso da pessoa em kg:"));
let altura = parseFloat(prompt("Digite a altura da pessoa em metros:"));

let imc = peso / (altura ** 2);

let classificacao;
if (imc < 18.5) {
  classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
  classificacao = "Peso normal";
} else if (imc >= 25 && imc <= 29.9) {
  classificacao = "Acima do peso (sobrepeso)";
} else if (imc >= 30 && imc <= 34.9) {
  classificacao = "Obesidade I";
} else if (imc >= 35 && imc <= 39.9) {
  classificacao = "Obesidade II";
} else {
  classificacao = "Obesidade III";
}

document.write(`O IMC é:, ${imc.toFixed(2)}`);
document.write(`Classificação: ${classificacao}`);
