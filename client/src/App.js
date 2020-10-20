import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import PetForm from './components/petForm';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <PetForm path="/pets/new"/>
        <Details path="/pets/:id"/>
        <Update path="/pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
