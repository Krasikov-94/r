import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = React.useState([]);
  const addToList = (value) => {
    const newTodo = {
      id: uuidv4(),
      title: value,
      status: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteList = () => {
    setTodos([]);
  };

  const deleteOneTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <Header addToList={addToList} />

      <Main todos={todos} deleteList={deleteList} deleteOneTodo={deleteOneTodo} />

      <Footer />
    </div>
  );
}

export default App;
