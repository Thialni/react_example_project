import './App.css';
import React, {useEffect, useState, useRef} from 'react';

function App() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([...todos, inputRef.current.value]);
    inputRef.current.value = '';
  }

  const apiUrl = 'https://jsonplaceholder.typicode.com/todos?limit=5'
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('This is your data', data)
        setTodos(data)
      })
  }, [])

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={addTodo}>add</button>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>{todo.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
