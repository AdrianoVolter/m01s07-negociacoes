import PropTypes from "prop-types";
/**
 * COMPONENTE EXTRA!
 *
 * Implementei este componente como resultado do desafio proposto.
 * Ele não é obrigatório, mas resolvi criá-lo para mostrar
 * como utilizar o prop-types para mapear uma prop que é um objeto,
 * e como criar uma função ('emReais' declarada abaixo) para formatar
 * datas, aproveitando a reutilização.
 */

// Criei esta função para formatar o valor em reais
function emReais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const TabelaLinha = ({ negociacao }) => {
  const { data, valor, quantidade } = negociacao;
  return (
    <tr>
      <td>{data}</td>
      <td>{quantidade}</td>
      <td>{emReais(valor)}</td>
      <td>{emReais(Number(valor) * Number(quantidade))}</td>
    </tr>
  );
};

TabelaLinha.propTypes = {
  negociacao: PropTypes.shape({
    data: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    quantidade: PropTypes.number.isRequired,
  }).isRequired,
};