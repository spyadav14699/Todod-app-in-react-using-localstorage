import { useState, useRef, useEffect} from 'react';
import './App.css';
import Todolist from './components/Todolist';

const LOCAL_STORAGE_KEY = 'todosAPP.todose';


function App() {

  const [todos, setTodos] = useState([]);

  const todonameref = useRef();
  const todonameref1 = useRef();
  const todonameref2 = useRef();

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.getItem(LOCAL_STORAGE_KEY) && setTodos(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  }, []);


function removeAll() {
  setTodos([]);

}
function toggletodo(id) {
  setTodos(todos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    return todo;
  }))
}

  function handleAddtodo(e) {
  e.preventDefault();
    const newtodo = todonameref.current.value;
    const newtodo1 = todonameref1.current.value;
    const newtodo2 = todonameref2.current.value;
    if (newtodo === '') {
      alert('Please enter a todo');
      return;
    }
    setTodos(prevTodos => {
      return [...prevTodos, {id: Math.random() , name: newtodo, quantity:newtodo1, price:newtodo2, completed: false}];
    });
    todonameref.current.value = '';
    todonameref1.current.value = '';
    todonameref2.current.value = '';
  
  }
  
   function removeclear() {
    setTodos(todos.filter(todo => !todo.completed));
  }
 
  return (
    <div className="App">
     <Todolist todos = {todos} toggletodo = {toggletodo} />

     <input type="text" ref={todonameref}/>
     <input type="text" ref={todonameref1}/>
     <input type="text" ref={todonameref2}/>
   
     <button onClick={handleAddtodo}>Add Todo</button>
     <button onClick={removeclear}>Clear Completed</button>
     <button onClick={removeAll}>Remove Todo</button> 
     <div>{
        todos.filter(todo => !todo.completed).length} left to do</div>
    </div>
  );
}

export default App;
