import {Alert} from 'flowbite-react';

import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import React from 'react';
import { Route, Routes } from 'react-router';
import NotFoundPage from './components/NotFoundPage';
import Detail from './components/Detail'

function App() {

  return (
    <>
      <div>
        <Header/>
        {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/home' element={<Home/>} /> 
          <Route path='/movies/details/:id' element={<Detail/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
        
      </div>
    </>
  )
}

export default App
