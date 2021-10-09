import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import './Login.css';

 const Login = () =>{

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(login({
            name:name,
            password:password,
            loggedIn:true
        }))
 
    }

     return(
         <div className="login">
             <form className="login-form" onSubmit = {(e) => handleSubmit(e)}>
                <h1>Login Here</h1> 
                <input
                 type= "name" 
                 placeholder="Name" 
                 value = {name}
                 onChange= {(e) => setName(e.target.value)} 
                 />
                <input 
                 type= "password" 
                 placeholder="password" 
                 value={password}
                 onChange= {(e) => setPassword(e.target.value)}
                 />
                 <button type= "submit" className="login-button">Login</button>
             </form>

         </div>
     )
 }

 export default Login 