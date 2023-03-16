import GrupoInput from "./GrupoInput";

function Formulario(props){
    return(

        <form className="form container">
            <div className="row">
                <GrupoInput/>
                <div className="form-group col-md-4">
                    <button className="btn btn-primary mt-4" type="button">{ props.quandoAdicionar}</button>
                </div>
            </div>
        </form>
    )



}

Formulario.propTypes = {
    quandoAdicionar: PropTypes.func.isRequired,
}


export default Formulario;