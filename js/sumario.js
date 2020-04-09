const resp = window.document.getElementById("UL");

const desafios_obj = {
  d001: "Desafio das Mensagens",
  d002: "Boas-vindas",
  d003: "Antes e Depois",
  d004: "Calculando o Troco",
  d005: "Conversor de Medidas",
  d006: "Conversor de Temperaturas",
  d007: "Conversor de BRL 🠞 USD",
  d008: "Desconto de 10%",
  d009: "Reajuste Salarial",
  d010: "Resolvendo de Bhaskara",
  d011: "Ano Bissexto",
  d012: "Preço antes, preço depois",

Object.keys(desafios_obj).map((element) => {
  resp.innerHTML += `<li><a href="./${element}.html"><b>${element}</b> - ${desafios_obj[element]}</a></li>`;
});
