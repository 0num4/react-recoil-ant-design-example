// import React from 'react';
// import logo from './logo.svg';
import InputForm from './components/InputForm';
import TodoList from './components/Todolist';
import { ErrorBoundary2 } from "./components/ErrorBoundary2";
import BadComponent from './components/BadComponent';
import './App.less';
import { Button } from 'antd';
import WeatherComponent from './components/WeatherForm';
import { WeatherResult } from './components/WeatherResult';
import { Suspense } from 'react';
function App() {
  return (

      <div className="App">
        {/* <BadComponent /> */}
        <WeatherComponent>
        </WeatherComponent>
        {/* <InputForm />
        <TodoList />
        <Button type="primary">Button</Button> */}

    <ErrorBoundary2 fallback={
      <p>
        error
      </p>
    }>
        <Suspense fallback={<p>loading</p>}>
          <WeatherResult />
        </Suspense>
    </ErrorBoundary2>
      </div>
  );
}

export default App;
