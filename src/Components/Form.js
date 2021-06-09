import React from 'react'

export default function Form(props) {

        
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className="col-md-6 mt-5" onSubmit={handleSubmit}>
             <h1 className="text-md-center mb-4">Buscar Ceps</h1>
            <div className="form-group">
                <label>Informe o CEP</label>
                <input className="form-control" type="text" id="cep" placeholder="Digite seu CEP" />
            </div>
            <input className="btn btn-primary btn-block mt-4" type="submit" value="Buscar" onClick={() => props.onCep(document.querySelector('#cep').value)}></input>
        </form>
    )
}
