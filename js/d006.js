function d006() {
  const resp = window.document.getElementById("saida");

  let temperature = Number(prompt("Digite uma temperatura em °C (Celsius)").replace(",", "."));

  let converted = {
    Kelvin: (temperature + 273).toLocaleString("pt-BR"),
    Fahrenheit: (1.8 * temperature + 32).toLocaleString("pt-BR"),
  };

  console.table(converted);

  resp.innerHTML = `
  <p><b>A temperatura de ${temperature.toLocaleString(
    "pt-BR"
  )}ºC, corrensponde a... </b></p>
  <p> ${converted.Kelvin}°K (Kelvin)</p>
  <p> ${converted.Fahrenheit}°F (Fahrenheit)</p>
  `;
}
