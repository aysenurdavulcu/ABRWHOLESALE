import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Login} from "./components/Login";
import { Register} from "./components/Register";



function App()  {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <div className="search-bar-container">
        {/* <div className = "title">ABR Wholesale </div> */}
        {/* <SearchBar/> */}
        {/* { 
          currentForm === "login" ? <Login onFormSwitch = {toggleForm} /> : <Register />
        } */}

        {/* <div className = "new-items">Browse our newest items</div> */}
        {/* <div>SearchResults</div> */}
        {/* <Products/> */}
        
      </div>
    </div>
  );
}

export default App;
