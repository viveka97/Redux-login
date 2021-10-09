import React from 'react';


import {useSelector} from "react-redux";
import Home from './components/Home';
import Login from './components/Login'
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)

  return (
    <div>
     {user ? <Home/> : <Login/>}
    </div>
  );
}

export default App;
