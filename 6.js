let centroX = Number(prompt("Digite a coordenada X do centro do círculo:"));
let centroY = Number(prompt("Digite a coordenada Y do centro do círculo:"));
let raio = Number(prompt("Digite o raio do círculo:"));

let pontoX = Number(prompt("Digite a coordenada X do ponto a ser testado:"));
let pontoY = Number(prompt("Digite a coordenada Y do ponto a ser testado:"));

let distancia = Math.sqrt((pontoX - centroX) ** 2 + (pontoY - centroY) ** 2);

if (distancia <= raio) {
  document.write("O ponto está dentro do círculo.");
} else {
    document.write("O ponto está fora do círculo.");
}
