import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Personajes from './Personajes'
import {Heroes} from './Heroes';


ReactDOM.render(
    <div>
        <Personajes id={Heroes[0].id} nombre={Heroes[0].nombre} img={Heroes[0].img} edad={Heroes[0].edad} tipo={Heroes[0].tipo} nem={Heroes[0].nem} info={Heroes[0].info} estrellas={Heroes[0].estrellas} habilidad1={Heroes[0].habilidad1} habilidad2={Heroes[0].habilidad2} habilidad3={Heroes[0].habilidad3} habilidad4={Heroes[0].habilidad4} habilidad5={Heroes[0].habilidad5} habilidad6={Heroes[0].habilidad6}/>
        <Personajes id={Heroes[1].id} nombre={Heroes[1].nombre} img={Heroes[1].img} edad={Heroes[1].edad} tipo={Heroes[1].tipo} nem={Heroes[1].nem} info={Heroes[1].info} estrellas={Heroes[1].estrellas} habilidad1={Heroes[1].habilidad1} habilidad2={Heroes[1].habilidad2} habilidad3={Heroes[1].habilidad3} habilidad4={Heroes[1].habilidad4} habilidad5={Heroes[1].habilidad5} habilidad6={Heroes[1].habilidad6}/>
        <Personajes id={Heroes[2].id} nombre={Heroes[2].nombre} img={Heroes[2].img} edad={Heroes[2].edad} tipo={Heroes[2].tipo} nem={Heroes[2].nem} info={Heroes[2].info} estrellas={Heroes[2].estrellas} habilidad1={Heroes[2].habilidad1} habilidad2={Heroes[2].habilidad2} habilidad3={Heroes[2].habilidad3} habilidad4={Heroes[2].habilidad4} habilidad5={Heroes[2].habilidad5} habilidad6={Heroes[2].habilidad6}/>
        <Personajes id={Heroes[3].id} nombre={Heroes[3].nombre} img={Heroes[3].img} edad={Heroes[3].edad} tipo={Heroes[3].tipo} nem={Heroes[3].nem} info={Heroes[3].info} estrellas={Heroes[3].estrellas} habilidad1={Heroes[3].habilidad1} habilidad2={Heroes[3].habilidad2} habilidad3={Heroes[3].habilidad3} habilidad4={Heroes[3].habilidad4} habilidad5={Heroes[3].habilidad5} habilidad6={Heroes[3].habilidad6}/>
        <Personajes id={Heroes[4].id} nombre={Heroes[4].nombre} img={Heroes[4].img} edad={Heroes[4].edad} tipo={Heroes[4].tipo} nem={Heroes[4].nem} info={Heroes[4].info} estrellas={Heroes[4].estrellas} habilidad1={Heroes[4].habilidad1} habilidad2={Heroes[4].habilidad2} habilidad3={Heroes[4].habilidad3} habilidad4={Heroes[4].habilidad4} habilidad5={Heroes[4].habilidad5} habilidad6={Heroes[4].habilidad6}/>
        <Personajes id={Heroes[5].id} nombre={Heroes[5].nombre} img={Heroes[5].img} edad={Heroes[5].edad} tipo={Heroes[5].tipo} nem={Heroes[5].nem} info={Heroes[5].info} estrellas={Heroes[5].estrellas} habilidad1={Heroes[5].habilidad1} habilidad2={Heroes[5].habilidad2} habilidad3={Heroes[5].habilidad3} habilidad4={Heroes[5].habilidad4} habilidad5={Heroes[5].habilidad5} habilidad6={Heroes[5].habilidad6}/>
        <Personajes id={Heroes[6].id} nombre={Heroes[6].nombre} img={Heroes[6].img} edad={Heroes[6].edad} tipo={Heroes[6].tipo} nem={Heroes[6].nem} info={Heroes[6].info} estrellas={Heroes[6].estrellas} habilidad1={Heroes[6].habilidad1} habilidad2={Heroes[6].habilidad2} habilidad3={Heroes[6].habilidad3} habilidad4={Heroes[6].habilidad4} habilidad5={Heroes[6].habilidad5} habilidad6={Heroes[6].habilidad6}/>
        <Personajes id={Heroes[7].id} nombre={Heroes[7].nombre} img={Heroes[7].img} edad={Heroes[7].edad} tipo={Heroes[7].tipo} nem={Heroes[7].nem} info={Heroes[7].info} estrellas={Heroes[7].estrellas} habilidad1={Heroes[7].habilidad1} habilidad2={Heroes[7].habilidad2} habilidad3={Heroes[7].habilidad3} habilidad4={Heroes[7].habilidad4} habilidad5={Heroes[7].habilidad5} habilidad6={Heroes[7].habilidad6}/>
    </div>
               
                
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();