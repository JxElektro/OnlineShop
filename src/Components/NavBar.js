import React from "react";
import { Link, Route, Switch } from "wouter";
import NotFound from "../Pages/NotFound";
import Productos from "../Pages/Productos";
import Carrito from "../Pages/Carrito";
import Contacto from "../Pages/Contacto";
import Home from "../Pages/Home";
import  { Cart }  from "../Components/Cart";


// This is a NavBar component that is used to navigate between pages
// It is used in the App.js file

export default function NavBar() {
  return (
    <div>
      <ul className="NavBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito    </Link>
        </li>
      
        < Cart />
      </ul>
      
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/productos" component={Productos} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/:rest*" component={NotFound} />
      </Switch>
      
    </div>
  );
}
