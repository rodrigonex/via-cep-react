import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import Table from './Components/Table';

export default function App() {

  const [buscaCep, setBuscaCep] = useState('');
  const [listaCep, setListaCep] = useState([]);

  useEffect(() => {


      async function response(){
        const link = `https://viacep.com.br/ws/${buscaCep}/json/`;

        const response = await fetch(link);
        const data = await response.json();
        
        setListaCep([...listaCep, data])
      }

      if(buscaCep !== ''){

        const filter = listaCep.filter((ceplist) =>{
          return buscaCep === ceplist.cep;
        })  

          if(filter.length > 0){
            alert("Cep já cadastrado.")
          }else{
            response()
          }       
      } 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[buscaCep])

  function formCep(cep) {
    if(cep === ''){
      alert('Informe um Cep invalido ou vazio');
    }else{
      setBuscaCep(cep);

      document.querySelector('#cep').value = '';
    }
  }

  function deleteCep(index) {
    const filter = listaCep.filter((cep, i) => {
      return i !== index;
    });

    setListaCep(filter);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <Form onCep={formCep} />  
        <div className="col-md-3"></div>   
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <Table onList={listaCep} onDelete={deleteCep}/>  
        <div className="col-md-1"></div>   
      </div>
    </div>
  )
}
