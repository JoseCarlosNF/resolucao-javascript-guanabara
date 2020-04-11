function d004() {
  let product_name = prompt("Que produto você está comprando?");

  let product_cost = prompt(
    `Quanto custa ${product_name} que você está comprando?`
  ).replace(",", ".");

  let payment = prompt(
    `Qual foi o valor que você deu para pagar ${product_name}?`
  ).replace(",", ".");

  let change = payment - product_cost;

  alert(`
  Você comprou ${product_name} que custou ${moneyFormat(product_cost)}.
  Deu ${moneyFormat(payment)} em dinheiro e vai receber ${moneyFormat(
    change
  )} de troco.
  Volte Sempre!`);
}

function moneyFormat(element) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(element);
}
