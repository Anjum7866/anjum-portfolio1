 import React  from "react";
 import { Route, Routes } from "react-router-dom";
 import Navbar from "../components/Navbar";
// import {ThemeProvider, createGlobalStyle} from 'styled-components';

// import '../App.css'

// const GlobalStyle = createGlobalStyle`
//   body{
//   background: linear-gradient(${props => props.theme.mode === 'dark' ? '#868f96, #596164' : '(#ff758c,#764ba2'});
//   }

// `

const Layout = () => {
//   const [theme, setTheme] = useState({ mode: 'light'});
   return (
//     <ThemeProvider theme={theme}>
    <>
   {/* <GlobalStyle /> */}
   <Routes>
            <Route path="/" element={<Navbar/>}/>
            {/* <Route path="/iPrint" element={<Iprint/>}/> */}
    </Routes>

    </>
//     </ThemeProvider>
   );
};

export default Layout;
