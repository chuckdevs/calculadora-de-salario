const salario = document.querySelector("#salario");
const textoResultado = document.querySelector(".texto-resultado");
const resultado = document.querySelector("#resultado");
const tituloResultado = document.querySelector(".titulo");

function calcSalario() {
  let salarioValor = parseFloat(salario.value);
  let padrao = salarioValor * (0.1).toFixed(2);
  let Dividas = salarioValor * 0.6;
  if (isNaN(salarioValor)) {
    tituloResultado.innerHTML = "VOCÊ DEIXOU O CAMPO VAZIO";
    resultado.style.display = "flex";
    document.querySelector(".dizimo").innerHTML = "";
    document.querySelector(".poupar").innerHTML = "";
    document.querySelector(".se-pagar").innerHTML = "";
    document.querySelector(".abundar").innerHTML = "";
    document.querySelector(".dividas").innerHTML = "";
  } else if (salarioValor === 0) {
    tituloResultado.innerHTML = "VOCÊ DIGITOU ZERO";
    resultado.style.display = "flex";
    document.querySelector(".dizimo").innerHTML = "";
    document.querySelector(".poupar").innerHTML = "";
    document.querySelector(".se-pagar").innerHTML = "";
    document.querySelector(".abundar").innerHTML = "";
    document.querySelector(".dividas").innerHTML = "";
  } else {
    tituloResultado.innerHTML = "Seu resultado é";
    document.querySelector(".dizimo").innerHTML = "Dizímo: R$ " + padrao;
    document.querySelector(".poupar").innerHTML = "Poupar: R$ " + padrao;
    document.querySelector(".se-pagar").innerHTML = "Se pagar: R$ " + padrao;
    document.querySelector(".abundar").innerHTML = "Abundar: R$ " + padrao;
    document.querySelector(".dividas").innerHTML =
      "Dividas: R$ " + Dividas.toFixed(2);
    resultado.style.display = "flex";
  }
}
/*
  let resultado =
    "Dizímo: R$" +
    Dizimo +
    "\nPoupar: R$" +
    Poupar +
    "\nSe pagar: R$" +
    sePagar +
    "\nAbundar: R$" +
    Abundar +
    "\n Dividas: R$" +
    Dividas;
  textoResultado.innerText = resultado;*/
