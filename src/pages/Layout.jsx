import React,{useState}  from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../contents/Home";
import About from "../contents/About";
import Contact from "../contents/Contact";
import Portfolio from "../contents/Portfolio";

 import {ThemeProvider, createGlobalStyle} from 'styled-components';

import '../App.css'

const GlobalStyle = createGlobalStyle`
  body{
  background: linear-gradient(${props => props.theme.mode === 'dark' ? '#868f96, #596164' : '(#ff758c,#764ba2'});
  }

`

const Layout = () => {
  const [theme, setTheme] = useState({ mode: 'light'});
  return (
    <ThemeProvider theme={theme}>
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
    )}><i class={theme.mode === 'dark' ? "fa fa-sun i1" : "fa fa-moon i1"}></i></div>
   
    </div>
    </>
     </ThemeProvider>
  );
};

export default Layout;
