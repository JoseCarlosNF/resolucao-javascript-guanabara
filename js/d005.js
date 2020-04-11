function d005() {
  const resp = window.document.getElementById("saida");

  let mensure = prompt("Digite uma distância em metros (m)").replace(",", ".");

  let converted = {
    "quilômetros (Km)": (mensure / 1000).toLocaleString("pt-BR"),
    "hectômetros (Hm)": (mensure / 100).toLocaleString("pt-BR"),
    "decâmetros (Dam)": (mensure / 10).toLocaleString("pt-BR"),
    "decímetros (dm)": (mensure * 10).toLocaleString("pt-BR"),
    "centímetros (cm)": (mensure * 100).toLocaleString("pt-BR"),
    "milímetros (mm)": (mensure * 1000).toLocaleString("pt-BR"),
  };

  console.table(converted);

  resp.innerHTML = `<p><b>A distância de ${Number(mensure).toLocaleString(
    "pt-BR"
  )} metros corresponde a...</b></p>`;

  Object.keys(converted).map((element) => {
    resp.innerHTML += `<p>${converted[element]} ${element}</p>`;
  });
}
