import React from 'react';
import Personajes from './Personajes';

const PersonajesList = ({Heroes}) => {
    return (
        <div>
            {
             Heroes.map((user,i) => {
                return (
                        <Personajes 
                        key={i} 
                        id={Heroes[i].id} 
                        nombre={Heroes[i].nombre} 
                        img={Heroes[i].img} 
                        edad={Heroes[i].edad} 
                        tipo={Heroes[i].tipo} 
                        nem={Heroes[i].nem} 
                        info={Heroes[i].info} 
                        estrellas={Heroes[i].estrellas} 
                        habilidad1={Heroes[i].habilidad1} 
                        habilidad2={Heroes[i].habilidad2} 
                        habilidad3={Heroes[i].habilidad3} 
                        habilidad4={Heroes[i].habilidad4} 
                        habilidad5={Heroes[i].habilidad5} 
                        habilidad6={Heroes[i].habilidad6}
                        />
                );
            })
            }
        </div>
    );
}
export default PersonajesList;