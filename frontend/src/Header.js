import logo from './Elcon-logo.svg';
import {Link} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import {Example,Item} from "./Caurosel"
import { useParams, useNavigate } from "react-router-dom";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  const navigate = useNavigate(); // Import useNavigate instead of useHistory

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    navigate("/home");
    
  }

  const username = userInfo?.username;
  return (
    <header>
    
     <img src={logo} alt="logo"  width="150" height="" />
     
     <nav>
     <Link to="/home">Home</Link>
        {username && (
          <>
          <Link to="/allexpenses" className="">All Expenses</Link>
            <Link to="/create">Add new expense</Link> 
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      
    </header>
  );
}





