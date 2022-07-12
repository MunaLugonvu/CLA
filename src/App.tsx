import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Footer from "./Components/Footer";
import  Register from "./Components/Register";
import Header from "./Components/Header";


import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
  <Header/>
  <Register/>
  <Footer/>
    </>
   
  );
}

export default App;
