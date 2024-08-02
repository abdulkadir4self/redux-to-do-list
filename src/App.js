import logo from './logo.svg';
import './App.css';

import TodoForm from './component/todoForm/TodoForm';
import TodoList from './component/todo-list/TodoList';

function App() {
  
  return (
    <div className="App">
      <h1>Web-Todo List</h1>
      <TodoForm/>
      <h2>My Todos</h2>
      <TodoList/>
    </div>
  );
}

export default App;
