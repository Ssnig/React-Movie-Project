import {Alert} from 'flowbite-react';

import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import React from 'react';
import { Route, Routes } from 'react-router';

function App() {

  return (
    <>
      <div>
        <Header/>
        <Home/>
        
      </div>
    </>
  )
}

export default App
