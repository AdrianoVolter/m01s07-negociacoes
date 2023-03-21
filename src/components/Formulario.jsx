import PropTypes from "prop-types";
import { useState } from "react";
import { GrupoInput } from "./GrupoInput";

export const Formulario = (props) => {
  const [data, setData] = useState("");
  const [valor, setValor] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  function handleAdicionarNegociacao() {
    const negociacao = {
      data: data,
      quantidade: quantidade,
      valor: valor,
    };
    props.quandoAdicionar(negociacao);

    // Bônus: resetar os campos após a inserção
    setData("");
    setQuantidade(0);
    setValor(0);
  }

  return (
    <form className="form container">
      <div className="row">
        <GrupoInput
          id="data"
          etiqueta="Data"
          tipo="text"
          aoDigitar={(e) => setData(e.target.value)}
          valor={data}
        />
        <GrupoInput
          id="quantidade"
          etiqueta="Quantidade"
          tipo="number"
          aoDigitar={(e) => setQuantidade(e.target.value)}
          valor={quantidade}
          min="1"
          step="1"
        />
        <GrupoInput
          id="valor"
          etiqueta="Valor"
          tipo="number"
          aoDigitar={(e) => setValor(e.target.value)}
          valor={valor}
          min="0.01"
          step="0.01"
        />
        <div className="col-1 d-flex align-items-end justify-content-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAdicionarNegociacao}
          >
            Incluir
          </button>
        </div>
      </div>
    </form>
  );
};

Formulario.propTypes = {
  quandoAdicionar: PropTypes.func.isRequired,
};