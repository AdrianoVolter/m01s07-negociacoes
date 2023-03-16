import GrupoInput from "./GrupoInput";
import PropTypes from 'prop-types';
function Formulario(props){

    // const quandoAdicionar =(event)=>{
    //     //event.preventDefault();
    //     console.log(event);
    // }

    return(

        <form className="form container">
            <div className="row">

                <GrupoInput />

                <div 
                    className="form-group col-md-4">
                    <button 
                        onClick={props.quandoAdicionar}
                        className="btn btn-primary m-4">
                        Adicionar
                    </button>
                </div>
            </div>
        </form>
        
    )

}


export default Formulario;