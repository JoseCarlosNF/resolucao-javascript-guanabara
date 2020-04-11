function d008() {
  const resp = window.document.getElementById("saida");

  let product_name = prompt("Qual é o produto que você está comprando?");
  let product_price = prompt(`Qual é o preço de ${product_name}`).replace(",", ".");
  let discount = product_price * 0.1;
  let final_price = product_price - discount;

  product_price = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product_price);

  discount = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(discount);

  final_price = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(final_price);

  resp.innerHTML = `
  <h2>Calculando o desconto de 10% para ${product_name}</h2>
  <p>O preço original era ${product_price}.</p>
  <p>Você acaba de ganhar ${discount} de desconto (-10%).</p>
  <p>No fim, você vai pagar ${final_price} no produto ${product_name}.</p>
  `;
}
