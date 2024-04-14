import React from "react"
import Header from "./Header";
import {Outlet} from "react-router-dom";
import {Link} from 'react-router-dom';
import {Example,Item} from "./Caurosel"
import {Elcomdetails} from "./Elcomdetails"
export default function Layout() {
  return (
    <main>
      <Header />   
      <Outlet />
    </main>
  );
}