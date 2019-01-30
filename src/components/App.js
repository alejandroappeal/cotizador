import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultado: '',
            datos: {}
        }
    }

    cotizarSeguro = (auto) => {
        const {marca, plan, anio} = auto;
        let resultado = 2000;
        const diferencia = obtenerDiferenciaAnio(anio);
        resultado -= ((diferencia * 3) * resultado) / 100;
        resultado = calcularMarca(marca) * resultado;

        let incremento = obtenerPlan(plan);
        resultado = parseFloat(incremento * resultado).toFixed(2);

        const datosAuto = {
            marca: marca,
            plan: plan, 
            anio: anio
        }

        this.setState({
            resultado: resultado,
            datos: datosAuto
        })        
    }

    render() {
        return (
          <div className="contenedor">
                <Header
                    titulo = "Cotizador de Seguro de Auto" 
                />
                <div className="contenedor-formulario">
                    <Formulario 
                        cotizarSeguro = {this.cotizarSeguro}
                    />
                    <Resumen 
                        datos = {this.state.datos}
                        resultado = {this.state.resultado}
                    />
                </div>
                
          </div>
        );
    }
}

export default App;
