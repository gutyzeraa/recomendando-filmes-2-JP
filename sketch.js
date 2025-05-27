function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let input;
let paragrafoResposta;

function setup() {
  createCanvas(600, 400);
  background(220);

  // Pergunta ao usuário
  textSize(20);
  textAlign(CENTER);
  text("O que você acha de Jurassic Park?", width / 2, 50);

  // Campo de entrada de texto
  input = createInput();
  input.position(width / 2 - input.width / 2, 100);
  input.changed(processaResposta); // Chama a função quando o Enter é pressionado

  // Parágrafo para exibir a resposta
  paragrafoResposta = createP('');
  paragrafoResposta.position(width / 2 - 200, 150);
  paragrafoResposta.style('width', '400px');
  paragrafoResposta.style('text-align', 'center');
  paragrafoResposta.style('font-size', '18px');
  paragrafoResposta.style('color', '#333');
}

function draw() {
  // Nada para desenhar continuamente neste exemplo
}

function processaResposta() {
  let textoDigitado = input.value().toLowerCase(); // Converte para minúsculas para facilitar a comparação
  let resposta = "";

  if (textoDigitado.includes("incrivel") ||
      textoDigitado.includes("ótimo") ||
      textoDigitado.includes("sensacional") ||
      textoDigitado.includes("demais") ||
      textoDigitado.includes("bom") ||
      textoDigitado.includes("gostei") ||
      textoDigitado.includes("adoro")) {
    resposta = "Eu concordo com você, é um clássico que revolucionou os cinemas!";
  } else {
    resposta = "Eu concordo! Por que você acha isso?"; // Pergunta o porquê para respostas negativas/neutras
  }

  paragrafoResposta.html(resposta); // Exibe a resposta na tela
  input.value(''); // Limpa o campo de entrada
}
