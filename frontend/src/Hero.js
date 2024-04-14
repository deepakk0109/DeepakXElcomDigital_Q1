import React from "react"
import Header from "./Header";
import {Outlet} from "react-router-dom";
import {Link} from 'react-router-dom';
import {Example,Item} from "./Caurosel"
import {Elcomdetails} from "./Elcomdetails"
import Footer from "./Footer";
export default function Hero() {
  return (
    <main>
     
      
      <Example/>
      <Elcomdetails/>
      <Footer/>
      <Outlet />
    </main>
  );
}