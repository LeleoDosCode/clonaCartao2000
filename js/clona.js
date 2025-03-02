const nomeCartao = document.getElementById("nomeCartao");
const nomeInput = document.getElementById("nome");
const numeroCartao = document.getElementById("numeroCartao");
const numeroInput = document.getElementById("numero");
const validadeCartao = document.getElementById("validadeCartao");
const validadeInput = document.getElementById("validade");
const cvvCartao = document.getElementById("cvvCartao");
const cvvInput = document.getElementById("cvv");

nomeInput.addEventListener("input", function () {
  let nomeValue = nomeInput.value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
  if (nomeValue === "") {
    nomeCartao.textContent = "NOME NO CARTÃO";
  } else {
    nomeCartao.textContent = nomeValue;
  }
});

numeroInput.addEventListener("input", function () {
  let numeroValue = numeroInput.value.replace(/\D/g, '');
  numeroValue = numeroValue.substring(0, 16);
  numeroValue = numeroValue.replace(/(.{4})/g, '$1 ').trim();
  if (numeroValue === "") {
    numeroCartao.textContent = "0000 0000 0000 0000";
  } else {
    numeroCartao.textContent = numeroValue;
  }
  numeroInput.value = numeroValue;
});

validadeInput.addEventListener("input", function () {
  if (validadeInput.value === "") {
    validadeCartao.textContent = "MM/AA";
  } else {
    validadeCartao.textContent = validadeInput.value;
  }
});

cvvInput.addEventListener("input", function () {
  let cvvValue = cvvInput.value.replace(/\D/g, ''); // Remove non-digit characters
  cvvValue = cvvValue.substring(0, 3); // Limit to 3 characters
  cvvInput.value = cvvValue; // Update the input value
  if (cvvValue === "") {
    cvvCartao.textContent = "000";
  } else {
    cvvCartao.textContent = cvvValue;
  }
});

function formatarData(input) {
  let valor = input.value.replace(/\D/g, ""); // Remove tudo que não for número
  if (valor.length > 2) {
    valor = valor.substring(0, 2) + '/' + valor.substring(2, 6); // Adiciona a barra
  }
  input.value = valor;
}