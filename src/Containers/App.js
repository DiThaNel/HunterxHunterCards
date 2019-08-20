import React, { Component } from 'react';
import {connect} from 'react-redux';
import PersonajesList from '../Components/PersonajesList';
import {Heroes} from '../Heroes';
import Header from '../Components/Header';
import ErrorBoundary from '../Components/ErrorBoundary';
import {setSearchField} from '../Actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        Busqueda: (evento) => dispatch(setSearchField(evento.target.value))
    }
}

class App extends Component {
constructor () {
    super()
    this.state = {
        Heroes: Heroes,
        
    }
}

componentDidMount() {
    this.setState({Heroes:Heroes})
}

render() {
    const {Heroes} = this.state;
    const {searchField, Busqueda} = this.props;
    const heroeFiltrado = Heroes.filter(Heroes => {
        return Heroes.nombre.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
        <div>
            <Header Busqueda={Busqueda}/>
            <ErrorBoundary>
                <PersonajesList Heroes={heroeFiltrado}/>
            </ErrorBoundary>
        </div>
    ); 
}}

export default connect(mapStateToProps,mapDispatchToProps)(App);