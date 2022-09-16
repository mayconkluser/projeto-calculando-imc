const calcular = document.getElementById("calculate");

function imc() {
  const nome = document.getElementById("name").value,
    altura = document.getElementById("height").value,
    peso = document.getElementById("weight").value,
    resultado = document.getElementById("result");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorImc = (peso / (altura * altura)).toFixed(1);
    let classificacao = "";
    if (valorImc < 18.5) {
      classificacao = ", cuidado esta a baixo do peso.";
    } else if (valorImc < 25) {
      classificacao = ", esta no peso ideal.";
    } else if (valorImc < 30) {
      classificacao = ", esta levemente acima do peso.";
    } else if (valorImc < 35) {
      classificacao = ", esta obsidade grau I.";
    } else if (valorImc < 40) {
      classificacao = ", esta obsidade grau II.";
    } else {
      classificacao = ", esta obsidade grau III (morbida).";
    }
    resultado.textContent = `${nome} Seu IMC é de  ${valorImc}${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos!";
  }
}

calcular.addEventListener("click", imc);
