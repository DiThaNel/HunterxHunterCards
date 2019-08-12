import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Personajes from './Personajes';
import * as serviceWorker from './serviceWorker';
import {Heroes} from './Heroes';


ReactDOM.render(<div><Personajes id={Heroes[0].id} nombre={Heroes[0].nombre} img={Heroes[0].img} edad={Heroes[0].edad} tipo={Heroes[0].tipo} nem={Heroes[0].nem} info={Heroes[0].info} estrellas={Heroes[0].estrellas} habilidades={Heroes[0].habilidades}/>
                     <Personajes id={Heroes[1].id} nombre={Heroes[1].nombre} img={Heroes[1].img} edad={Heroes[1].edad} tipo={Heroes[1].tipo} nem={Heroes[1].nem} info={Heroes[1].info} estrellas={Heroes[1].estrellas} habilidades={Heroes[1].habilidades}/>
                     <Personajes id={Heroes[0].id} nombre={Heroes[0].nombre}/>
                     <Personajes id={Heroes[0].id} nombre={Heroes[0].nombre}/>
                     <Personajes id={Heroes[0].id} nombre={Heroes[0].nombre}/>
                </div>
                
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();