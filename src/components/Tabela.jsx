//Configure o componente Tabela com as seguintes props: negociacoes , array, requerido, imprimir cada linha da tabela atraves de um .map detro de tbody;
import PropTypes from 'prop-types';

function Tabela(props) {

   const {negociacoes} = props;


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
                    {/* {
                        negociacoes.map((negociacao, index) => {
                            return (
                                <tr key={index}>
                                    <td>{negociacao.data}</td>
                                    <td>{negociacao.quantidade}</td>
                                    <td>{negociacao.valor}</td>
                                    <td>{negociacao.volume}</td>
                                </tr>
                            )
                        }
                        )


                    } */}
                </tbody>
                <tfoot>
                    <tr>

                    </tr>
                </tfoot>
            </table>
        )
}


// Tabela.propTypes = {
//     negociacao: PropTypes.array.isRequired,
// }

export default Tabela;