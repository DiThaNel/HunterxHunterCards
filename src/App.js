import React from 'react';
import PersonajesList from './PersonajesList';
import {Heroes} from './Heroes';
import Header from './Header';

const App = () => {
    return (
        <div>
            <Header/>
            <PersonajesList Heroes={Heroes}/>
        </div>
    );
}
export default App;