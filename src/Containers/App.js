import React, { Component } from 'react';
import PersonajesList from '../Components/PersonajesList';
import {Heroes} from '../Heroes';
import Header from '../Components/Header';



class App extends Component {
constructor () {
    super()
    this.state = {
        Heroes: Heroes,
        searchField: '',
    }
}

componentDidMount() {
    this.setState({Heroes:Heroes})
}

Busqueda = (evento) => {
    this.setState({searchField:evento.target.value})
}

render() {
    const {Heroes,searchField} = this.state;
    const heroeFiltrado = Heroes.filter(Heroes => {
        return Heroes.nombre.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
        <div>
            <Header Busqueda={this.Busqueda}/>
            <PersonajesList Heroes={heroeFiltrado}/>
        </div>
    ); 
}}
export default App;