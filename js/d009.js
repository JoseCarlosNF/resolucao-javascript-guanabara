function d009() {
  const resp = window.document.getElementById("saida");

  let name = prompt("Qual o nome do funcionário?");
  let salary = Number(prompt(`Qual o salário de ${name}`).replace(",", "."));
  let percentual_ajust = Number(
    prompt(
      `O salário de ${name} vai ser reajustado em qual porcentagem?`
    ).replace("%", "")
  );

  let ajust_salary = salary * (percentual_ajust / 100);
  let new_salary = salary + ajust_salary;

  resp.innerHTML = `
  <h2>${name} recebeu um aumento salarial!</h2>
  <p>O salário atual era ${moneyFormat(salary)}.</p>
  <p>Com o aumento de ${percentual_ajust}%, o salário vai aumentar ${moneyFormat(ajust_salary)} no próximo mês.</p>
  <p>E a partir daí. ${name} vai passar a ganhar ${moneyFormat(new_salary)}.</p>
  `;
}

function moneyFormat(element) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(element);
}