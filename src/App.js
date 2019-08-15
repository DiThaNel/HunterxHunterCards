import React, { Component } from 'react';
import PersonajesList from './PersonajesList';
import {Heroes} from './Heroes';
import Header from './Header';


class App extends Component {
constructor () {
    super()
    this.state = {
        Heroes: Heroes,
        searchField: '',
    }
}

Busqueda = (evento) => {
    this.setState({searchField:evento.target.value})
}

render() {
    const heroeFiltrado = this.state.Heroes.filter(Heroes => {
        return Heroes.nombre.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
        <div>
            <Header Busqueda={this.Busqueda}/>
            <PersonajesList Heroes={heroeFiltrado}/>
        </div>
    );
}}
export default App;