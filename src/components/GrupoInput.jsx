import PropTypes from "prop-types";

export const GrupoInput = (props) => {
  const { tipo, etiqueta, id, min, step, valor, aoDigitar } = props;
  return (
    <div class="form-group col">
      <label htmlFor={id}>{etiqueta}</label>
      <input
        type={tipo}
        id={id}
        class="form-control"
        required
        min={min}
        step={step}
        value={valor}
        onChange={aoDigitar}
      />
    </div>
  );
};

GrupoInput.propTypes = {
  tipo: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  valor: PropTypes.string.isRequired,
  aoDigitar: PropTypes.func.isRequired,
};