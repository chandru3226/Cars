import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/View/View';
import Containers from './Container/Container';
import { RenderComponent } from './Components/constant';

function App() {
  const [page, setPage] = React.useState('Home');

  return (
    <div className="App">
       <Provider store={store}>
      <Containers setPage={setPage} />
      <RenderComponent type={page} />
      
    </Provider>
    </div>
  );
}

export default App;
