import PropTypes from "prop-types";
import { TabelaLinha } from "./TabelaLinha";

export const Tabela = ({ negociacoes }) => {
  function totalizador() {
    const valorTotal = negociacoes.reduce((totalizador, negociacao) => {
      return (
        totalizador + Number(negociacao.valor) * Number(negociacao.quantidade)
      );
    }, 0);

    return valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div class="my-5">
      <table class="table table-hover table-bordered">
        <thead class="table-primary">
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
          {negociacoes.map((negociacao) => (
            <TabelaLinha negociacao={negociacao} />
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td>{totalizador()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

Tabela.propTypes = {
  negociacoes: PropTypes.array.isRequired,
};