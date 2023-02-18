import React, { useState ,useRef} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

export function TareaFormulario({ enviarTarea }) {

    const [input, setInput] = useState('');

    let tareaInput = useRef();

    //funcion que se ejecutara cada vez que se escriba sobre la caja de etxto
     const manejarCambio = (e) => {
         setInput(e.target.value);
     };

     //funcion que se ejecutara cada vez que se envie el formulario al presioanr el boton de agregar tarea
    const manejarEnvio = (e) => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        };
        enviarTarea(tareaNueva);
        tareaInput.current.value='';
        setInput('');
       
    };

    return (
        <form className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto'
                onChange={manejarCambio}
                ref={tareaInput}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
}