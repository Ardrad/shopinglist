import React from 'react';
import logo from './logo.svg';
import './sass/main.scss';
import {Header} from "./components/Header";
import {NewItemForm} from "./components/NewItemForm";



function App() {
  return (
    <div className="App">
      <Header/>
      <NewItemForm/>

    </div>
  );
}

export default App;
