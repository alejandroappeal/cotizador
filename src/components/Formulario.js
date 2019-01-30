import React,{Component} from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.marca = React.createRef();
        this.anio = React.createRef();
        this.planBasico = React.createRef();
        this.planCompleto = React.createRef();
    }    

    cotizar = (e) => {
        e.preventDefault();

        const plan = this.planBasico.current.checked ? 'basico' : 'completo';
        const infoAuto = {
            marca: this.marca.current.value,
            anio: this.anio.current.value,
            plan: plan
        }

        this.props.cotizarSeguro(infoAuto);
        //e.currentTarget.reset();
    }

    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.cotizar}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marca}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.anio}>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" ref={this.planBasico} value="basico"/> Básico
                    <input type="radio" name="plan" ref={this.planCompleto} value="completo"/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}

export default Formulario;