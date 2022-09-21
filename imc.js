const botaoCalcular = document.getElementById("calculate");

const calcularImc = () => {
  const alturaImc = document.getElementById("height").value;
  const pesoImc = document.getElementById("weight").value;
  const valorImc = pesoImc / (alturaImc * alturaImc);
  return valorImc.toFixed(1);
};

const verificacaoImc = () => {
  const alturaImc = document.getElementById("height").value;
  const pesoImc = document.getElementById("weight").value;
  const nomeImc = document.getElementById("name").value;
  const resultadoImc = document.getElementById("result");
  let descricao = "";

  if (nomeImc !== "" && alturaImc !== "" && pesoImc !== "") {
    if (calcularImc() < 18.5) {
      descricao = "você esta a baixo do peso.";
    } else if (calcularImc() < 25) {
      descricao = "você esta no peso ideal.";
    } else if (calcularImc() < 30) {
      descricao = "você com sobre peso.";
    } else {
      descricao = "você esta acima do peso.";
    }
    resultadoImc.textContent = `${nomeImc} seu IMC é de ${calcularImc()}, ${descricao}`;
  } else {
    resultadoImc.textContent = "Por favor preencha todos os campos!!!";
  }
};

const mostrarImc = () => {
  verificacaoImc();
};

botaoCalcular.addEventListener("click", mostrarImc);
