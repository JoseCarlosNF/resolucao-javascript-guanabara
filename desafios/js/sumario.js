const resp = window.document.getElementById("UL");

const desafios_obj = {
  d001: "Desafio das Mensagens",
  d002: "Boas-vindas",
  d003: "Antes e Depois",
  d004: "Calculando o Troco",
  d005: "Conversor de Medidas",
  d006: "Conversor de Temperaturas",
  d007: "Conversor de BRL 🠞 USD",
  d013: "Situação do aluno",
};

Object.keys(desafios_obj).map((element) => {
  resp.innerHTML += `<li><a href="./${element}.html">${element} - ${desafios_obj[element]}</a></li>`;
});
