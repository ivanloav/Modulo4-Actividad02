import './todoitem.css';                  // Importa los estilos del componente TodoItem
import { useState } from 'react';         // Importa el hook useState de React
import PropTypes from 'prop-types';       // Importa PropTypes

// Define y exporta la función TodoItem
export function TodoItem({ todo, onDelete, onComplete, onUpdate }) {
  // Define el estado para si se está editando y el texto de edición
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Define la función para iniciar la edición
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Define la función para guardar la edición
  const handleSave = () => {
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  // Define la función para cancelar la edición
  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  // Renderiza el componente
  return (
    <div className={`addItem ${todo.isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onComplete(todo.id)}
        className="custom-checkbox"
      />
      {isEditing ? (
        <>
          <input className='editInput'
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>✅</button>
          <button onClick={handleCancel}>❌</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEdit} disabled={todo.isCompleted}>✏️</button>
          <button onClick={() => {
                if (window.confirm(`¿Estás segur@ de que quieres eliminar la tarea ${todo.text}?`)) {
                    onDelete(todo.id)
                }
            }} disabled={todo.isCompleted}>🗑️</button>
        </>
      )}
    </div>
  );
}

// Define las propiedades del componente TodoItem
// tip: esta validacion la tendriamos gratis con TypeScript
// en js se hace definiendo la propiedad PropTypes al componente
TodoItem.PropTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  }),
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};
