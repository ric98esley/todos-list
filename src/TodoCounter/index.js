import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return (
        <div className='TodoCounter'>
            <h2 className="TodoTitle">Tus Tareas</h2>
            <p>Has compleado {completedTodos} de {totalTodos} TODOs</p>
        </div>
    )
}

export { TodoCounter };