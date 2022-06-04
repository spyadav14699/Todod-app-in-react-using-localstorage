import { useState, useRef} from 'react';
import './App.css';
import Todolist from './components/Todolist';
import uuidv4 from 'uuid/v4';

function App() {

  const [todos, setTodos] = useState([]);

  const todonameref = useRef();

  function handleAddtodo(e) {
    e.preventDefault();
    const newtodo = todonameref.current.value;
    if (newtodo === '') {
      alert('Please enter a todo');
      return;
    }
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: newtodo, completed: false}];
    });
    todonameref.current.value = '';
  }

  return (
    <div className="App">
     <Todolist todos = {todos} />

     <input type="text" ref={todonameref}/>
     <button onClick={handleAddtodo}>Add Todo</button>
     <button>Remove Todo</button> 
     <div>0 left to do</div>
    </div>
  );
}

export default App;
