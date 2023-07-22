import React, {useState} from "react";
import Navbar from "./Navbar"

function Register(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const[name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return ( 
        <div className = "auth-form-container">
            <Navbar/>
            <h2>Register</h2>
        <form className = "register-form" onSubmit = {handleSubmit}>
            <label htmlFor="name"> Full name</label>
            <input value = {name} name = "name" id="name" placeholder="Full Name" />
            <label htmlFor ="email"> email </label>
            <input value = {email} type = "email" placeholder = "test@gmail.com" id= "email" name="email"/>
            <label htmlFor ="password"> password </label>
            <input value = {pass} type = "password" placeholder = "******" id= "password" name="password"/>
             <button type = "submit">LogIn</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already have an account? Login here </button>
            </div>
    )
}
export default Register