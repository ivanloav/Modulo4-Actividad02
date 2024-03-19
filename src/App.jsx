import './App.css';                                 // Importa los estilos de la aplicación
import { TodoList } from './components/todolist';   // Importa el componente TodoList

// Define y exporta la función App
function App() {
  // Renderiza el componente
  return (
    <>
      <h1>Lista de tareas</h1>
      <TodoList />
    </>
  )
}

export default App;
