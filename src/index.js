import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Personajes from './Personajes'
import {Heroes} from './Heroes';


ReactDOM.render(
    <div>
        <Personajes id={Heroes[0].id} nombre={Heroes[0].nombre} img={Heroes[0].img} edad={Heroes[0].edad} tipo={Heroes[0].tipo} nem={Heroes[0].nem} info={Heroes[0].info} estrellas={Heroes[0].estrellas} habilidades={Heroes[0].habilidades}/>
        <Personajes id={Heroes[1].id} nombre={Heroes[1].nombre} img={Heroes[1].img} edad={Heroes[1].edad} tipo={Heroes[1].tipo} nem={Heroes[1].nem} info={Heroes[1].info} estrellas={Heroes[1].estrellas} habilidades={Heroes[1].habilidades}/>
        <Personajes id={Heroes[2].id} nombre={Heroes[2].nombre} img={Heroes[2].img} edad={Heroes[2].edad} tipo={Heroes[2].tipo} nem={Heroes[2].nem} info={Heroes[2].info} estrellas={Heroes[2].estrellas} habilidades={Heroes[2].habilidades}/>
        <Personajes id={Heroes[3].id} nombre={Heroes[3].nombre} img={Heroes[3].img} edad={Heroes[3].edad} tipo={Heroes[3].tipo} nem={Heroes[3].nem} info={Heroes[3].info} estrellas={Heroes[3].estrellas} habilidades={Heroes[3].habilidades}/>
        <Personajes id={Heroes[4].id} nombre={Heroes[4].nombre} img={Heroes[4].img} edad={Heroes[4].edad} tipo={Heroes[4].tipo} nem={Heroes[4].nem} info={Heroes[4].info} estrellas={Heroes[4].estrellas} habilidades={Heroes[4].habilidades}/>
        <Personajes id={Heroes[5].id} nombre={Heroes[5].nombre} img={Heroes[5].img} edad={Heroes[5].edad} tipo={Heroes[5].tipo} nem={Heroes[5].nem} info={Heroes[5].info} estrellas={Heroes[5].estrellas} habilidades={Heroes[5].habilidades}/>
        <Personajes id={Heroes[6].id} nombre={Heroes[6].nombre} img={Heroes[6].img} edad={Heroes[6].edad} tipo={Heroes[6].tipo} nem={Heroes[6].nem} info={Heroes[6].info} estrellas={Heroes[6].estrellas} habilidades={Heroes[6].habilidades}/>
        <Personajes id={Heroes[7].id} nombre={Heroes[7].nombre} img={Heroes[7].img} edad={Heroes[7].edad} tipo={Heroes[7].tipo} nem={Heroes[7].nem} info={Heroes[7].info} estrellas={Heroes[7].estrellas} habilidades={Heroes[7].habilidades}/>
    </div>
               
                
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();