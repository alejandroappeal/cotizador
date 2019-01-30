import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';
import Resultado from './Resultado';

class Resumen extends Component {
    mostrarResumen() {
        const {marca, plan, anio} = this.props.datos;

        if(!marca || !plan || !anio) return null;

        return (
            <div className="resumen">
                <h2>Resumen de cotización</h2>
                <li>Marca: { primeraMayuscula(marca) }</li>
                <li>Plan: { primeraMayuscula(plan) }</li>
                <li>Año: { anio }</li>
            </div>
        )
    }

    render() {  
        return(
            <div>
                { this.mostrarResumen() }
                <Resultado 
                    resultado = {this.props.resultado}
                />
            </div>
            
        )
    }
}

export default Resumen;