import GrupoInput from "./GrupoInput";
import PropTypes from 'prop-types';


function Formulario(props){


    return(

        <form className="form container">
            <div className="row">

                <GrupoInput quandoAdicionar={props.quandoAdicionar}
                />
                {/* <div className="form-group col-md-4">
                    <button 
                        type="button"
                        onClick={props.quandoAdicionar}
                        className="btn btn-primary">

                        Adicionar
                    </button>
                </div> */}
            </div>
        </form>
        
    )

}

Formulario.propTypes = {
    quandoAdicionar: PropTypes.func.isRequired,
}


export default Formulario;