import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products"




function App()  {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Products/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/register' element={ <Register/> }/>
          <Route path='/SearchBar' element={ <SearchBar/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
