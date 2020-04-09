function d013() {
  const resp = window.document.getElementById("saida");
  const nome = prompt("Qual o nome do aluno?");

  let nota1 = Number(prompt(`Primeira nota de ${nome}:`));
  let nota2 = Number(prompt(`Segunda nota de ${nome}:`));

  let media = Number((nota1 + nota2) / 2);

  const { resultado, className } = analise(media);

  nota1 = nota1.toLocaleString("pt-BR");
  nota2 = nota2.toLocaleString("pt-BR");
  media = media.toLocaleString("pt-BR");

  resp.innerHTML = `
  <h2>Analisando a situação de ${nome}</h2>
  <p>Com as notas ${nota1} e ${nota2} a média é <b>${media}</b></p>
  <p>Com a média de ${media} o aluno está <b class="${className}">${resultado}</b></p>
  `;
}

function analise(media) {
  if (media < 3) {
    return {
      resultado: "reprovado",
      className: "reprovado",
    };
  }

  if (3 <= media && media <= 6) {
    return {
      resultado: "em recuperação",
      className: "recuperacao",
    };
  }
  if (media > 6) {
    return {
      resultado: "aprovado",
      className: "aprovado",
    };
  }
}
