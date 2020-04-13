function d007() {
  const resp = window.document.getElementById("saida");

  let reais = prompt("Quantos R$ você tem na carteira?");

  let dolares = reais / cotacao_usd;

  resp.innerHTML = `<p>${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(reais)} = ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
  }).format(dolares)}</p>`;
}
