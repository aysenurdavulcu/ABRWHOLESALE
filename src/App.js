import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Item from "./components/Item";
import Contact from "./components/Contact";
import About from "./components/About";



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
          <Route path='/item' element={ <Item/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/contact' element={ <Contact/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
