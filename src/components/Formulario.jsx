import GrupoInput from "./GrupoInput";

function Formulario(){
    return(

        <form className="form container">
            <div className="row">
                <GrupoInput/>
                <div className="form-group col-md-4">
                    <button className="btn btn-primary mt-4" type="button">Incluir</button>
                </div>
            </div>
        </form>
    )



}

export default Formulario;