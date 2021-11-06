import React from 'react';
import logo from './logo.svg';
import InputForm from './components/InputForm';
import TodoList from './components/Todolist';
import './App.css';

function App() {
  return (
    <div className="App">
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
