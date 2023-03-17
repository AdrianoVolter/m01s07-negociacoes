import PropTypes from 'prop-types';

function Tabela(props){

const negociacoes = ["data", "quantidade", "valor", "volume"]
    
    return (

        <table className="table table-hover table-bordered">
            <thead className='bg bg-primary text-white'>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.negociacoes.map(negociacao => {
                        return (
                            <tr key={negociacao.id}>
                                <td>{negociacao.data.getDate()}/{negociacao.data.getMonth() + 1}/{negociacao.data.getFullYear()}</td>
                                <td>{negociacao.quantidade}</td>
                                <td>{negociacao.valor}</td>
                                <td>{negociacao.volume}</td>
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
            <tfoot>
          <tr>
            
          </tr>
        </tfoot>
        </table>
    )
}

Tabela.propTypes = {
    negociacao: PropTypes.array.isRequired,
}

export default Tabela;








{/* props.negociacoes.map(negociacao => {
                        return (
                            <tr key={negociacao.id}>
                                <td>{negociacao.data.getDate()}/{negociacao.data.getMonth() + 1}/{negociacao.data.getFullYear()}</td>
                                <td>{negociacao.quantidade}</td>
                                <td>{negociacao.valor}</td>
                                <td>{negociacao.volume}</td>
                            </tr>
                        // ) */}