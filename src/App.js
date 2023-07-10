import './App.css';

import { BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import { signOut } from "firebase/auth";
import {auth} from "./firebase-config"
function App() {

  const [isAuth, setIsAuth]= useState(localStorage.getItem("isAuth"));

  const signUserOut= ()=>{
      signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname="/login";
      })
  }
  return (
    <Router>
      <nav>
        <h1 className='n'>Blogs</h1>
        <div className='h'>
        <Link to ="/">Home</Link>
        
        {!isAuth ? <Link to ="/login">Login</Link> : 
        <>
        <Link to ="/createPost">CreatePost</Link>
        <button onClick={signUserOut}>Log Out</button>
        </>
      }
        </div>
    
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/createPost' element={<CreatePost/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
