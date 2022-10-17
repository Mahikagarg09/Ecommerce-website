import React from 'react';
import "./Header.css";
import Navbar from './Navbar';
import Search from './Search';

export default function header({setShow,toggleMode,mode,size}){
    return (
        <>
            <Search setShow={setShow} size={size}  />
            <Navbar toggleMode={toggleMode} mode={mode}/>
        </>
    )
}
