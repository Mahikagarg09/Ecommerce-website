import React from 'react';
import "./Header.css";
import Navbar from './Navbar';
import Search from './Search';

export default function header({setShow,size,theme,toggleTheme}){
    return (
        <>
            <Search setShow={setShow} size={size}  theme={theme} />
            <Navbar toggleTheme={toggleTheme} theme={theme}/>
        </>
    )
}
