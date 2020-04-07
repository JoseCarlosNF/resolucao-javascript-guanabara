function d006() {
  const resp = window.document.getElementById("saida");

  let temperature = Number(prompt("Digite uma temperatura em ºC (Celsius)"));

  let converted = {
    Kelvin: (temperature + 273).toLocaleString("pt-BR"),
    Fahrenheit: (1.8 * temperature + 32).toLocaleString("pt-BR"),
  };

  console.table(converted);

  resp.innerHTML = `
  <p><b>A temperatura de ${temperature.toLocaleString(
    "pt-BR"
  )}ºC, corrensponde a... </b></p>
  <p> ${converted.Kelvin}ºK (Kelvin)</p>
  <p> ${converted.Fahrenheit}ºF (Fahrenheit)</p>
  `;
}
