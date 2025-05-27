import React,{useState}  from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../contents/Home";
import About from "../contents/About";
import Contact from "../contents/Contact";
import Portfolio from "../contents/Portfolio";
import { FaSun, FaMoon } from 'react-icons/fa';

 import {ThemeProvider, createGlobalStyle} from 'styled-components';

import '../App.css'

const GlobalStyle = createGlobalStyle`
  body{
  background: linear-gradient(${props => props.theme.mode === 'dark' ? '#614385, #516395' : '(#009245, #FCEE21'});
  }

`
const Layout = () => {
  const [theme, setTheme] = useState({ mode: 'light'});
  return (
    <ThemeProvider theme={theme} >
    <>
  <GlobalStyle />
  <div className="App">
    <Navbar/>
   <Routes>
    
        
    
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    
   
    </Routes>
    <div class="back1 glass" onClick={e => setTheme(
      theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'}
    )}>{theme.mode === 'dark' ?(<FaSun className="i1"/>)  :(<FaMoon className="i1" />) }</div>
  
    </div>
    
    </>
     </ThemeProvider>
  );
};

export default Layout;
