import React, { Component } from 'react';
//import './App.css';
import './App2.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Navegacion from './Componentes/Navegacion';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      
     
    };
    
  }

  mostrarInput() {
    alert("boton presionado");
    //const { showMe } = this.state;
    //this.setState({ showMe: !showMe })
  }

  

  componentDidMount() {
    const url = "https://api-dolares.herokuapp.com/api/fecha_importe_dolares";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({ posts: posts })
    })
  }


  onclick(event) {
    console.log(event.target.type);
  }

  render() {
    const columns = [
      {
        Header: <b>Fecha</b>,
        accessor: "fecha",
        style: {
          textAlign: "center"
        },
        width: 150,
        maxWidth: 100,
        minWidth: 100,
        sortable: false,
        filterable: false

      },
      {
        Header: <b background-color="red">Compra</b>,
        Cell: props => {
          return (
            <input id="200" type="text" name="compritas" />
            
          )
          
        },
        accessor: "importe",
        style: {
          textAlign: "center",

        },
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        sortable: false,
        filterable: false
      },
      {
        Header: <b>Venta</b>,
        Cell: props => {
          return (
            <input type="text" name="name" />
          )
        },
        style: {
          textAlign: "center",

        },
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        sortable: false,
        filterable: false
      },
      {
        Header: <b>Editar</b>,
        Cell: props => {
          return (
            <a className="waves-effect waves-light btn-small" onClick={() =>
              this.mostrarInput()}><i className="material-icons center">edit</i></a>
          )
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        sortable: false,
        filterable: false
      },
      {
        Header: <b>Guardar</b>,
        Cell: props => {
          return (
            <a class="waves-effect waves-light btn-small" onClick={this.onClick}><i class="material-icons center">save</i></a>
          )
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        sortable: false,
        filterable: false
      },
    ]
    return (
      <div>
        <Navegacion />

        <div className="vistaTabla">
          <h4>Fechas de pagos en dolares sin tipo de cambio</h4>
          <ReactTable
            columns={columns}
            data={this.state.posts}
            filterable
            noDataText={"No hay pagos"}
            defaultPageSize={7}
          /></div>
      </div>

    );
  }

}

export default App;





//Pago-row.js