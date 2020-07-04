import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter , Route} from "react-router-dom";
import Navbar from "./components/Navbar";

import Contact from "./components/Contact";
import Index from "./components/Index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

   
      <Route exact path="/" component={Index}></Route>

      <Route path="/contact" component={Contact}></Route>
  
      
    </BrowserRouter>
  );
}

export default App;
