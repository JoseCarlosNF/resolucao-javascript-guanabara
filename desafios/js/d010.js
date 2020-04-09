function d010() {
  const resp = window.document.getElementById("saida");

  let side_a = prompt("Qual é o valor de a?");
  let side_b = prompt("Qual é o valor de b?");
  let side_c = prompt("Qual é o valor de c?");

  let equation = `${side_a}x² + ${side_b}x + ${side_c} = 0`;
  let calc_to_delta = `${side_b}² - 4 . ${side_a} . ${side_c}`;
  let delta = side_b ** 2 - 4 * side_a * side_c;

  resp.innerHTML = `
  <h2>Resolvendo Bhaskara</h2>
  <p>A equação atual é <b>${equation}</b></p>
  <p>O cálculo realizado será <b>𝚫 = ${calc_to_delta}</b></p>
  <p>O valor calculado foi <b class="recuperacao">𝚫 = ${delta}</b></p>  
  `;
}
