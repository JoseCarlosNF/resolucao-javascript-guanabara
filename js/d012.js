function d012() {
  const resp = window.document.getElementById("saida");

  let old_price = Number(prompt("Qual era o preço do produto?"));
  let new_price = Number(prompt("Qual é o preço atual do produto?"));

  let resultado = analyse(old_price, new_price);

  old_price = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(old_price);
  new_price = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(new_price);

  resp.innerHTML = `
  <h2>Analisando os valores informados</h2>
  <p>O produto custava ${old_price} e agora custa ${new_price}.</p>
  <p>Hoje o produto está <b class=${resultado.class}>${resultado.text}</b>.</p>
  <p>O preço <b class=${resultado.class}>${resultado.variation}</b> em relação ao preço anterior.</p>
  <p>Uma variação de <b class=${resultado.class}>${resultado.percentual_variation}</b>.</p>
  `;
}

function analyse(old_price, new_price) {
  let variation = new_price - old_price;
  variation = variation < 0 ? variation * -1 : variation;
  let percentual_variation = ((new_price * 100) / old_price - 100).toPrecision(
    2
  );
  percentual_variation =
    percentual_variation < 0 ? percentual_variation * -1 : percentual_variation;

  if (old_price == new_price) {
    return {
      text: "com o mesmo preço.",
      class: "recuperacao",
      variation: "não subiu",
      percentual_variation: "0%",
    };
  }
  if (old_price > new_price) {
    return {
      text: "mais barato",
      class: "aprovado",
      variation: `caiu ${Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(variation)}`,
      percentual_variation: `${percentual_variation}% pra baixo`,
    };
  }
  if (old_price < new_price) {
    return {
      text: "mais caro",
      class: "reprovado",
      variation: `subiu ${Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(variation)}`,
      percentual_variation: `${percentual_variation}% pra cima`,
    };
  }
}
