import { useState, useRef, useEffect} from 'react';
import './App.css';
import Todolist from './components/Todolist';

const LOCAL_STORAGE_KEY = 'todosAPP.todose';


function App() {

  const [todos, setTodos] = useState([]);

  const todonameref = useRef();

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.getItem(LOCAL_STORAGE_KEY) && setTodos(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  }, []);
  

  function handleAddtodo(e) {
  e.preventDefault();
    const newtodo = todonameref.current.value;
    if (newtodo === '') {
      alert('Please enter a todo');
      return;
    }
    setTodos(prevTodos => {
      return [...prevTodos, {id: Math.random() , name: newtodo, completed: false}];
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
