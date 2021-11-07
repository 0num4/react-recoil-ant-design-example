// import React from 'react';
// import logo from './logo.svg';
import InputForm from './components/InputForm';
import TodoList from './components/Todolist';
import { ErrorBoundary2 } from "./components/ErrorBoundary2";
import BadComponent from './components/BadComponent';
import './App.less';
import { Button } from 'antd';
function App() {
  return (

    <ErrorBoundary2 fallback={
      <p>
        error
      </p>
    }>
      <div className="App">
        {/* <BadComponent /> */}
        <InputForm />
        <TodoList />
        <Button type="primary">Button</Button>
      </div>
    </ErrorBoundary2>
  );
}

export default App;
