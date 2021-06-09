import React from 'react'

export default function Table(props) {
    const row = props.onList.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.cep}</td>
                <td>{row.logradouro}</td>
                <td>{row.localidade}</td>
                <td>{row.bairro}</td>
                <td>{row.uf}</td>
                <td>{row.ibge}</td>
                <td>
                    <input type="button" className="btn btn-danger" value="Delete" onClick={() => props.onDelete(index)}></input>
                </td>
            </tr>
        )
    })
    return (
        <table className="col-md-10 mt-5 table table table-striped table-bordered">
            <thead>
                <tr>
                    <td>CEP</td>
                    <td>Logadura</td>
                    <td>Localidade</td>
                    <td>Bairro</td>
                    <td>Uf</td>
                    <td>IBGE</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </table>
    )
}
