import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'
function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext)
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  
  const onCancel = () => {
    setOpenModal(false);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo ToDo</label>
      <textarea
      value={newTodoValue}
      onChange={onChange}
      placeholder="Cortar la cebolla para el almuerzo"></textarea>
      <div className="TodoForm-buttonContainer">
        <button
        
        type="button"
        className="TodoForm-button-cancel TodoForm-button"
        onClick={onCancel}>Cancelar</button>
        <button
        className="TodoForm-button TodoForm-button-add"
        type="submit">Anadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
