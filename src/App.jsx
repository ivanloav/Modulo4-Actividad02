import './App.css';                                 // Importa los estilos de la aplicación
import { TodoList } from './components/todolist';   // Importa el componente TodoList

// Define y exporta la función App
function App() {
  // Renderiza el componente
  return (
    <>
      <div className="App-header">
        <img src="./src/assets/favicon.png" alt="Icono" />
        <h1>Lista de tareas</h1>
      </div>
      <TodoList />
    </>
  )
}

export default App;
