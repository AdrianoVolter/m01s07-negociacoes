function GrupoInput() {
  
  return (
   
            <div className="row align-item-center col-md-8">
                <div className="form-group col-md-4">
                    <label htmlFor="inputData">Data</label>
                    <input type="date" className="form-control" id="inputData" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputQuantidade">Quantidade</label>
                    <input type="number" className="form-control" id="inputQuantidade" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputValor">Valor</label>
                    <input type="number" className="form-control" id="inputValor" />
                </div>
               
            </div>
  );
}

export default GrupoInput;