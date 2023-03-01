import './App.css';
import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom"
import CompDidMountAxios from './components/CompDidMountAxios';
import Post from './components/Post';
import Comment from './components/Comment';
import User from './components/User';




function App() {

  return (
     <div className='container'>
     
     <CompDidMountAxios />

    </div>
    
  );
}

export default App;
