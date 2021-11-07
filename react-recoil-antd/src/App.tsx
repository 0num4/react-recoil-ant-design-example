// import React from 'react';
// import logo from './logo.svg';
import InputForm from './components/InputForm';
import TodoList from './components/Todolist';
import './App.less';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <InputForm />
      <TodoList />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
