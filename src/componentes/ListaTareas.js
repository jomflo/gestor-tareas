import React, {useState} from 'react';
import { TareaFormulario } from './TareaFormulario';
import {Tarea} from './Tarea';
import '../hojas-de-estilo/ListaTareas.css';

export function ListaTareas() {

    const [tareas, setTareas] = useState([]);

    //agregar una tarea
    const agregarTarea= (tarea) =>{
        if(tarea.texto.trim()){
            tarea.texto=tarea.texto.trim();
            const tareasActualizadas= [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }else{
           // console.log('No se puede agregar tarea vacia');
        }
    }

    //eliminar una tarea
    const eliminarTarea=(id)=>{
        //si el id a eliminar es igual a tarea.id entonces no lo agregamos , quedando asi fuera de tareasActualizadas
const tareasActualizadas = tareas.filter(tarea => tarea.id!==id);
setTareas(tareasActualizadas);
    }


    //Completar tarea
    const completarTarea = (id)=>{
        const tareasActualizadas = tareas.map(tarea=>{
            if(tarea.id===id){
                tarea.completada= !tarea.completada;
            }
            return tarea;
        });

        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TareaFormulario enviarTarea={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}